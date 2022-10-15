pm.sendRequest({

    url: pm.environment.get('aloha_url'),

    method: 'POST',

    header: {

        'content-type': 'application/json',

    },

    body: {

        mode: 'raw',

        raw: JSON.stringify({"appId":"Postman","userName":pm.environment.get('user_name'),"password":pm.environment.get('user_password')})

    }

}, function (err, res) {

    pm.environment.set("access_token", res.json().accessToken.tokenData);

});