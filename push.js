var webPush = require('web-push'); 
const vapidKeys = {
   "publicKey": "BMN59gfN-g9ugOxxLLei8qjqx1HTnOclhFur-J7duf1y0pzeE7Y3DxBxpshcSHm69gG5nDTd1eSTRp4cxmWRhmc",
   "privateKey": "xZer9On_4HF73wCbXfVhGZ0KYQXmkhcQIvmWt4qX7jo"
};

webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)

var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/c1STXZrZGso:APA91bGTl4tzKa0nqkXlYLiWM_pmZopEzAxK8_LllRJHUcpqrPLGHCqUmd4ooSUWiVmRdEj83qQrA-HuFElq__NSxelZjkIZUW4DB2i6plpDGKiCB5d8MzaHYUAyRUy-mVQaRmUGnqIn",
   "keys": {
       "p256dh": "BNPag6nJKPwdbusi3Dt8SQshk9aNvO3IlIqje0dok8FcBl1/f1UI6U+dx6uicE73lvYzeEp5SvgAk4xtbKzIpFE=",
       "auth": "CanRAh6Czn++SMRcd+IIBg=="
   }
};

var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
   gcmAPIKey: '771272108345',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);