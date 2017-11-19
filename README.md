# Instagram Bookmarklet

Compiled Bookmarklet (drag to bookmark bar): [Instagram Images](javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3Bvar%20images%20%3D%20%5B%5D%3B%24(%20%22img%22%20).each(function()%20%7Bvar%20image%20%3D%20%24(%20this%20).prop(%20%22src%22%20)%3Bif%20(image.indexOf(%22s150x150%22)%20%3E%3D%200%20%7C%7C%20image.indexOf(%22_a.jpg%22)%20%3E%3D%200)%20%7Breturn%20true%3B%7D%20else%20%7Bimages.push(image)%3B%7D%7D)%3Bvar%20videos%20%3D%20%5B%5D%3B%24(%20%22video%22%20).each(function()%20%7Bvar%20video%20%3D%20%5B%24(%20this%20).prop(%20%22poster%22%20)%2C%24(%20this%20).prop(%20%22src%22%20)%5D%3Bvideos.push(video)%3B%7D)%3Bvar%20html%20%3D%20%22%22%3B%24.each(images%2C%20function(index%2Cimage)%20%7Bvar%20display%20%3D%20%22%3Cimg%20src%3D'%22%20%2B%20image%20%2B%20%22'%3E%3Cbr%3E%22%3Bhtml%20%2B%3D%20display%3B%7D)%3B%24.each(videos%2C%20function(index%2Cvideo)%20%7Bvar%20display%20%3D%20%22%3Cvideo%20poster%3D'%22%20%2B%20video%5B0%5D%20%2B%20%22'%20src%3D'%22%20%2B%20video%5B1%5D%20%2B%20%22'%20playsinline%3D''%20preload%3D'none'%20type%3D'video%2Fmp4'%20controls%3E%3C%2Fvideo%3E%3Cbr%3E%22%3Bhtml%20%2B%3D%20display%3B%7D)%3Bfunction%20nWin()%20%7Bvar%20w%20%3D%20window.open()%3B%24(w.document.body).html(html)%3B%7DnWin()%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)())

## Usage

* With the bookmarketlet in your bookmark bar.
* Go to your Instagram feed. Click the bookmark around some pictures you like.
* A new window will open with the full size version of those images and videos.


## Bugs

* This does not currently work if viewing images on a profile page. You'll get the 640x640 images.