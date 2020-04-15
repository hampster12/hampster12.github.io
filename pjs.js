//add photography images to arrays for each album
var boundariesAlbum = ["http://students.washington.edu/hjf3/GIT_REPO/imdtester/boundary1.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/boundary2.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/boundary3.JPG"];
var memyselfandIAlbum = ["http://students.washington.edu/hjf3/GIT_REPO/imdtester/me1.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/me2.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/me3.jpg"];
var forestAlbum = ["http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest1.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest2.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest3.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest4.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest5.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest6.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest7.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest8.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/forest9.jpg"];
var sightAlbum = ["http://students.washington.edu/hjf3/GIT_REPO/imdtester/sight1.jpg", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/sight2.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/sight3.JPG"];
var otherAlbum = ["http://students.washington.edu/hjf3/GIT_REPO/imdtester/other1.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other2.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other3.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other4.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other5.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other6.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other7.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other8.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other9.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other10.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other11.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other12.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other13.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other14.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other15.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other16.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other17.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other18.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other19.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other20.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other21.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other22.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other23.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other24.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other25.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other26.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other27.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other28.JPG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/other29.JPG"];
var allAlbum = [boundariesAlbum, memyselfandIAlbum, forestAlbum, sightAlbum, otherAlbum];
var albumCovers = ["images/album1.png", "images/album2.png", "images/album3.png", "images/album4.png", "images/album5.png", "images/album6.png"];

//other art page image arrays
//var video = "images/myVideo.mp4";
var paint = ["http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint1.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint2.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint3.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint4.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint5.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint6.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint7.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint8.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint9.PNG",
"http://students.washington.edu/hjf3/GIT_REPO/imdtester/paint10.PNG"];

var nails =["http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail1.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail2.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail3.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail4.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail5.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail6.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail7.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail8.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail9.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail10.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail11.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail12.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail13.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail14.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail15.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail16.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail17.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail18.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail19.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail20.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail21.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail22.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail23.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail24.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail25.JPG", "http://students.washington.edu/hjf3/GIT_REPO/imdtester/nail26.JPG"];
var nailIndexs = [];

//code page arrays
var codeExamplesJava = [];
var codeExamplesHTML_CSS_Java = [];
var codeExamplesPython = [];
var codeExamplesGWC = [];

$(document).ready(function()
{
  //PHOTOGRAPHY PAGE IMAGE RENDER - BASED ON ALBUM CHOSEN
  render_albums();
  setUpNail();

  //TIMER INTERVAL - CHANGE AN IMAGE ON THE NAIL GRID EVERY SO OFTEN
  setInterval(render_Nail, 3000);
  function render_Nail()
  {
    var nailEl = Math.floor(Math.random()*9);
    var el = document.getElementById(nailEl);
    var source = '#' + nailEl;
    var usedPicIndex = Math.floor(Math.random()*nails.length);
    for(var i = 0; i < nailIndexs; i++){
      if(nailIndexs[i] === usedPicIndex)
      {
        usedPicIndex = Math.floor(Math.random()*nails.length);
      }
    }
    $(source).attr('src', nails[usedPicIndex]);
  }

  render_paint();
  $("div").on("click", "img", function()
  {
    var pictureClear = $('#bound');
    pictureClear.empty();
    if(this.id === "albumNum0")
    {
      render_boundaries();
    }
    else if(this.id === "albumNum1")
    {
      render_memyselfandI();
    }
    else if(this.id === "albumNum2")
    {
      render_forest();
    }
    else if(this.id === "albumNum3")
    {
      render_sight();
    }
    else if(this.id === "albumNum4")
    {
      render_other();
    }
    else if(this.id === "albumNum5")
    {
      render_ALL();
    }
    else
    {
      render_albums();
    }
  });
  function render_albums()
  {
    for(var i = 0; i < albumCovers.length; i++)
    {
      if((i % 3) === 0)
      {
        $("#bound").append('<div class="row">');
      }
      $("#bound").append('<div class="col-sm-4 image-cell"><div class="pictureImage"><img src = ' + albumCovers[i] + ' id="albumNum' + i + '"></div></div>');
    }
  }
  function render_boundaries()
  {
    for(var i = 0; i < boundariesAlbum.length; i++)
    {
      if((i % 3) === 0)
      {
        $("#bound").append('<div class="row">');
      }
      $("#bound").append('<div class="col-sm-4 image-cell"><div class="pictureImage"><img src = ' + boundariesAlbum[i] + ' id="boundarieImage"></div></div>');
    }
  }
  function render_memyselfandI()
  {
    for(var i = 0; i < memyselfandIAlbum.length; i++)
    {
      if((i % 3) === 0)
      {
        $("#bound").append('<div class="row">');
      }
      $("#bound").append('<div class="col-sm-4 image-cell"><div class="pictureImage"><img src = ' + memyselfandIAlbum[i] + ' id="memyselfandIimage"></div></div>');
    }
  }
  function render_forest()
  {
    for(var i = 0; i < forestAlbum.length; i++)
    {
      if((i % 3) === 0)
      {
        $("#bound").append('<div class="row">');
      }
      $("#bound").append('<div class="col-sm-4 image-cell"><div class="pictureImage"><img src = ' + forestAlbum[i] + ' id="forestImage"></div></div>');
    }
  }
  function render_sight()
  {
    for(var i = 0; i < sightAlbum.length; i++)
    {
      if((i % 3) === 0)
      {
        $("#bound").append('<div class="row">');
      }
      $("#bound").append('<div class="col-sm-4 image-cell"><div class="pictureImage"><img src = ' + sightAlbum[i] + ' id="sightImage"></div></div>');
    }
  }
  function render_other()
  {
    for(var i = 0; i < otherAlbum.length; i++)
    {
      if((i % 3) === 0)
      {
        $("#bound").append('<div class="row">');
      }
      $("#bound").append('<div class="col-sm-4 image-cell"><div class="pictureImage"><img src = ' + otherAlbum[i] + ' id="otherImage"></div></div>');
    }
  }
  function render_ALL()
  {
    render_boundaries();
    render_memyselfandI();
    render_forest();
    render_sight();
    render_other();
  }

  //SET UP NAILS SO THEY RANDOMLY GENERATE OVERTIME
  function setUpNail()
  {
    for(var i = 0; i < 9; i++)
    {
      if((i % 3) === 0)
      {
        $("#nailAdd").append('<div class="row">');
      }
      var nailNumCur = Math.floor(Math.random()*nails.length);
      nailIndexs.push(nailNumCur);
      $("#nailAdd").append('<div class="col-sm-4 image-cell"><div class="nailsImage"><img src = ' + nails[nailNumCur] + ' id="' + i + '"></div></div>');
    }
  }
  function render_paint()
  {
    for(var i = 0; i < paint.length; i++)
    {
      if((i % 3) === 0)
      {
        $("#paintAdd").append('<div class="row">');
      }
      $("#paintAdd").append('<div class="col-sm-4 image-cell"><div class="pictureImage"><img src = ' + paint[i] + ' id="otherImage"></div></div>');
    }
  }
});