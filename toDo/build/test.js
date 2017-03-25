'use strict';

//let name="test";
//let template = `
//    <div>${name}</div>
//`
//
////document.getElementById('mount').innerHTML=template   
// 
//
//var str="First,Second,Third,Fourth";
//
//
//let objects=[
//    {
//    title:"AngularJS",_summary:"framework from google"
//    },
//    {
//    title:"ReactJS", _summary:"library from facebook"
//    },
//    {
//     title:"Nodejs", _summary:"learn"   
//    }
//]

//console.log(objects);
//
////var thumbnailHeading="AngularJS";
////let summary = "framework from google"
//
//
//
////document.getElementById('mount').innerHTML=template1;
//
//let outDiv=document.createElement('div');
//let mountDiv=document.getElementById('mount')
//
//
//
//
//let count=1;
//for(let x of objects)
//{
//    
//    console.log(count++);
//    let newDiv=document.createElement('div');
//    let thumbnailHeading=x.title;    
//    
//    console.log("The thumbnail is"+thumbnailHeading);
//    
//    let summary=x._summary;
//    console.log(summary);
//    let template1 = 
//    `<div class="row">
//      <div class="col-sm-6 col-md-4">
//        <div class="thumbnail">
//          <img src="http://lorempixel.com/242/200/" alt="200X240">
//          <div class="caption">
//            <h3>${thumbnailHeading}</h3>
//            <p>${summary}</p>
//            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
//            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
//          </div>
//        </div>
//      </div>
//    </div>
//    `
//    //mountDiv.innerHTML+=template1;
//    newDiv.innerHTML=template1;
//    console.log(template1);
//    outDiv.appendChild(newDiv);
//    outDiv.style.cssText='display:flex';
//}   
//
//mountDiv.appendChild(outDiv);

function performingAjax() {
  $.ajax({
    url: 'src/dummy.json',
    method: 'GET'
  }).success(function (res) {
    var outDiv = document.createElement('div');
    var mountDiv = document.getElementById('mount');
    $.each(res, function (key, value) {
      console.log(value.title + "," + value.summary);
      var count = 1;

      console.log(count++);
      var newDiv = document.createElement('div');
      var thumbnailHeading = value.title;

      console.log("The thumbnail is" + thumbnailHeading);

      var summary = value.summary;
      console.log(summary);
      var template1 = '<div class="row">\n                          <div class="col-sm-6 col-md-4">\n                            <div class="thumbnail">\n                              <img src="http://lorempixel.com/242/200/" alt="200X240">\n                              <div class="caption">\n                                <h3>' + thumbnailHeading + '</h3>\n                                <p>' + summary + '</p>\n                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>\n                                <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        ';
      //mountDiv.innerHTML+=template1;
      newDiv.innerHTML = template1;
      console.log(template1);
      outDiv.appendChild(newDiv);
      outDiv.style.cssText = 'display:flex';
    });

    mountDiv.appendChild(outDiv);
  });
}

function fetchData() {
  console.log("calling function fetch data");
  //    $("#username").blur(function()
  //    {
  $.ajax({
    url: 'src/dummy.json',
    method: 'GET'
  }).success(function (response) {
    var outDiv = document.createElement('div');
    var mountDiv = document.getElementById('mount');
    var inputData = $(enterInput).val();
    console.log("The input value is " + inputData);
    //                var res = response.filter(function (el) {
    //                        return kpis.indexOf(el.id) >= 0; 
    //                });
    //                
    //var res=response.filter((x) => x["title"] == inputData)
    var res = response.filter(function (x) {
      return x["title"].search(inputData) != -1;
    });
    console.log("The response is " + res);
    $.each(res, function (key, value) {
      console.log(value.title + "," + value.summary);
      var count = 1;

      console.log(count++);
      var newDiv = document.createElement('div');
      var thumbnailHeading = value.title;

      console.log("The thumbnail is" + thumbnailHeading);

      var summary = value.summary;
      console.log(summary);
      var template1 = '<div class="row">\n                          <div class="col-sm-6 col-md-4">\n                            <div class="thumbnail">\n                              <img src="http://lorempixel.com/242/200/" alt="200X240">\n                              <div class="caption">\n                                <h3>' + thumbnailHeading + '</h3>\n                                <p>' + summary + '</p>\n                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>\n                                <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        ';
      //mountDiv.innerHTML+=template1;
      newDiv.innerHTML = template1;
      console.log(template1);
      outDiv.appendChild(newDiv);
      outDiv.style.cssText = 'display:flex';
    });

    mountDiv.appendChild(outDiv);
  });
}