hostname = *.pornhub.com
    
^https:\/\/(cn|www)\.pornhub\.com\/_xa\/ads url reject-dict
^https?:/\/(cn|www)\.pornhub\.com\/($|(view|video).*$) url script-response-body https://raw.githubusercontent.com/NanNan-Z/Rewrite/main/pornhub.js


var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/NanNan-Z/Rewrite/main/pornhub.css" type="text/css">');
$done({ body });
