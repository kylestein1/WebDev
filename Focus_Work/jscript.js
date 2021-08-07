
function showJobs(){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var workJob = JSON.parse(this.responseText);
            var jobList = workJob.jobs;
            console.log(workJob.jobs);
            console.log(workJob.jobs.job_type);

            console.log(jobList.length);
                        //var listNumber = document.getElementById("listID");

            //console.log(this.responseText);
            while(document.getElementById("jobList").firstChild){      
              var no = document.getElementById("jobList");
              var noThis = no.firstChild;
              no.removeChild(noThis); 
          }
            // console.log(todos);
            for(let i=0; i<jobList.length; i++){
                var pos = document.createElement("LI");
                pos.classList.add("className");
                
                var title = workJob.jobs[i].title;
                // title.classList.add("title");
                var compName = workJob.jobs[i].company_name;
                var jType = workJob.jobs[i].job_type;
                var jCat = workJob.jobs[i].category;
                var location = workJob.jobs[i].candidate_required_location;
                var jobDescription = workJob.jobs[i].description;
                var date = workJob.jobs[i].publication_date;
                
                
                console.log(i);

                var posText = document.createTextNode("");
                pos.innerHTML = "Title: " + title + "<br>" + "Company Name: " + compName + "<br>" + "Type: " + jType + "<br>" + "Category: " + jCat+ "<br>" +"Location: " +location + "<br>" + "Date Posted: " + date+ "<br>" + jobDescription ;
                console.log(jobDescription);
                pos.id = jobList[i].id;
                pos.appendChild(posText);
                document.getElementById("jobList").appendChild(pos);
               
               var all = document.getElementById("jobList");
              
          }
        }
    };
    xhttp.open("GET", "https://remotive.io/api/remote-jobs?limit=25", true);
    xhttp.send();
}
showJobs();


function filterJobs(){
  var categoryID = document.getElementById("filter");
  category = categoryID.value;
  console.log(category);
  console.log(categoryID);

  var numberListed = document.getElementById("amountListed").value;
  console.log(numberListed);

  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        var workJob = JSON.parse(this.responseText);
        var jobList = workJob.jobs;
        console.log(workJob.jobs);
        //console.log(this.responseText);
        while(document.getElementById("jobList").firstChild){      
          var no = document.getElementById("jobList");
          var noThis = no.firstChild;
          no.removeChild(noThis);
      }
        // console.log(todos);
        // var jobLimit = 99;
        if (numberListed>jobList.length){
          numberListed = jobList.length;
        }
        for(let i=0; i<numberListed; i++){
          var pos = document.createElement("LI");
          pos.classList.add("className");
          
          var title = workJob.jobs[i].title;
          // title.classList.add("title");
          var compName = workJob.jobs[i].company_name;
          var jType = workJob.jobs[i].job_type;
          var jCat = workJob.jobs[i].category;
          var location = workJob.jobs[i].candidate_required_location;
          var jobDescription = workJob.jobs[i].description;
          var date = workJob.jobs[i].publication_date;
          
          
          console.log(i);

          var posText = document.createTextNode("");
          pos.innerHTML = "Title: " + title + "<br>" + "Company Name: " + compName + "<br>" + "Type: " + jType + "<br>" + "Category: " + jCat+ "<br>" +"Location: " +location + "<br>" + "Date Posted: " + date+ "<br>" + jobDescription ;

          console.log(jobDescription);
          pos.id = jobList[i].id;
          pos.appendChild(posText);
          document.getElementById("jobList").appendChild(pos);
         
         var all = document.getElementById("jobList");
        
           
      }
      }
};

xhttp2.open("GET", "https://remotive.io/api/remote-jobs?category=" + category, true);
xhttp2.send();

}

function searchJob(){
  event.preventDefault();
  var search = document.getElementById("jobSearch").value;
  console.log(search);
  
  var numberListed = document.getElementById("amountListed").value;

  document.getElementById("jobSearch").value="";
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        var workJob = JSON.parse(this.responseText);
        var jobList = workJob.jobs;
        console.log(workJob.jobs);
        //console.log(this.responseText);
        while(document.getElementById("jobList").firstChild){      
          var no = document.getElementById("jobList");
          var noThis = no.firstChild;
          no.removeChild(noThis);
      }
        // console.log(todos);
        // var jobLimit = 99;
        if (numberListed>jobList.length){
          numberListed = jobList.length;
        }
        for(let i=0; i<numberListed; i++){
          var pos = document.createElement("LI");
          pos.classList.add("className");
          
          var title = workJob.jobs[i].title;
          // title.classList.add("title");
          var compName = workJob.jobs[i].company_name;
          var jType = workJob.jobs[i].job_type;
          var jCat = workJob.jobs[i].category;
          var location = workJob.jobs[i].candidate_required_location;
          var jobDescription = workJob.jobs[i].description;
          var date = workJob.jobs[i].publication_date;
          
          
          console.log(i);

          var posText = document.createTextNode("");
          pos.innerHTML = "Title: " + title + "<br>" + "Company Name: " + compName + "<br>" + "Type: " + jType + "<br>" + "Category: " + jCat+ "<br>" +"Location: " +location + "<br>" + "Date Posted: " + date+ "<br>" + jobDescription ;

          console.log(jobDescription);
          pos.id = jobList[i].id;
          pos.appendChild(posText);
          document.getElementById("jobList").appendChild(pos);
         
         var all = document.getElementById("jobList");
        
      }
      }
};

xhttp2.open("GET", "https://remotive.io/api/remote-jobs?search=" + search, true);
xhttp2.send();
}
