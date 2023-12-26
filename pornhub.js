hostname = *.pornhub.com

var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/NanNan-Z/Rewrite/main/pornhub.css" type="text/css">');
$done({ body });
