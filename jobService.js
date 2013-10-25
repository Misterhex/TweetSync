var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'TweetsToJekyll',
  description: 'nodejs Job to push tweets to jekyll',
  script: 'C:\\misterhex\\blog\\job.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();