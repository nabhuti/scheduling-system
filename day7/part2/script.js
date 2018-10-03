// create a client here: https://developer.whereismytransport.com/clients
window .onload = function(){
   show('login-form')
    
    try {
      
        getAgencies(getToken())
        show('agencies-form')
      } catch (error) {
        console.log('no valid token found')
      }


    var submitButton = this.document.getElementById("submit")
    submitButton.addEventListener('click', function (event){
        event.preventDefault()

        var clientId = getClientId()
        var clientSecret = getClientSecret()

        logIn(clientId,clientSecret)

    })

    var agencyButton = document.getElementById('submit-agency')
    agencyButton.addEventListener('click', function (event) {
    event.preventDefault()
    
    // Get selected option.
    // load lines for selected options
    var agencies = document.getElementById('agencies-select')
    var selectedAgency = agencies.options[agencies.selectedIndex].value

    getLines(getToken(), selectedAgency)
    })


    var logoutButton = document.getElementById('submit-logout')
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault()

        logout()

        show('login-form')

    })

 }

 

function show(formId){
 document.getElementById('login-form').style.display = 'none'
 document.getElementById('agencies-form').style.display = 'none'
 document.getElementById('lines-form').style.display = 'none'
 document.getElementById('logout-form').style.display = 'none'

 document.getElementById(formId).style.display = 'block'
 if(formId != 'login-form'){
  document.getElementById('logout-form').style.display = 'block'
 }

  
}

function getToken () {
    // CHECK if token exists in local storage
    var token = window.localStorage.getItem('token')
    if (typeof token !== 'undefined' && token !== 'undefined' && token != null) {
      // hide the form if the token exists
     // show('agencies-form')
      return token

    } else {
      window.localStorage.removeItem('token')
      throw new Error('There is no valid token found')
    }
  }

function getClientId(){
    var clientId = document.getElementById('client-id')
    return clientId.value 
}

function getClientSecret(){
    var clientSecret = document.getElementById('client-secret')
    return clientSecret.value
}



function logIn(clientId,clientSecret){

var CLIENT_ID = clientId;
var CLIENT_SECRET = clientSecret;
var payload = {
  'client_id': CLIENT_ID,
  'client_secret': CLIENT_SECRET,
  'grant_type': 'client_credentials',
  'scope': 'transportapi:all'
};

var request = new XMLHttpRequest();
request.open('POST', 'https://identity.whereismytransport.com/connect/token', true);
request.addEventListener('load', function () {
  var response = JSON.parse(this.responseText);
  var token = response.access_token;
  window.token = token;


  if(this.status=== 200 ){
  localStorage.setItem('token', token)
  localStorage.setItem('storageDate', Date.now().toLocaleString())
  
  show('agencies-form')
  getAgencies(getToken())

  }else{
      console.log('get token call failed')
  }
});

request.setRequestHeader('Accept', 'application/json');
var formData = new FormData();

for (var key in payload) {
  formData.append(key, payload[key]);
}

request.send(formData);
}



function logout () {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('storageDate')
    
  }

  function getAgencies (token) {
    var request = new window.XMLHttpRequest()
    request.addEventListener('load', function () {
      if (this.status === 401) {
        return logout()
      }
      var response = JSON.parse(this.responseText)
      addAgenciesToDropDown(response)
    })
    request.open('GET', 'https://platform.whereismytransport.com/api/agencies', true)
    request.setRequestHeader('Accept', 'application/json')
    request.setRequestHeader('Authorization', 'Bearer ' + token)
    request.send()
  }

function addAgenciesToDropDown (agenciesList) {
    var agenciesSelect = document.getElementById('agencies-select')
    agenciesSelect.options.length = 0
    agenciesSelect.options.add(new window.Option('Select an option', null, true, true))
    agenciesList.forEach(function (agency) {
      agenciesSelect.options.add(new window.Option(agency.name, agency.id, false, false))
    })
  }

  function getLines (token, agency) {
    var request = new window.XMLHttpRequest()
    request.addEventListener('load', function () {
      if (this.status === 401) {
        return logout()
      }
      var response = JSON.parse(this.responseText)
      show('lines-form')
      addLinesToDropDown(response)
      
    })
    request.open('GET', 'https://platform.whereismytransport.com/api/lines?agencies= ' + agency, true)
    request.setRequestHeader('Accept', 'application/json')
    request.setRequestHeader('Authorization', 'Bearer ' + token)
    request.send()
  }
  
  function addLinesToDropDown (linesList) {
    var linesSelect = document.getElementById('lines-select')
    linesSelect.options.length = 0
    linesSelect.options.add(new window.Option('Select an option', null, true, true))
    linesList.forEach(function (line) {
      linesSelect.options.add(new window.Option(line.name, line.id, false, false))
    })
  }


function getClientId(){
    var clientId = document.getElementById('client-id')
    return clientId.value 
}

function getClientSecret(){
    var clientSecret = document.getElementById('client-secret')
    return clientSecret.value
}

