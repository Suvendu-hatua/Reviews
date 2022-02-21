const arr=[
    {
        image:"image1.jpg",
        name:"Suvendu Hatua",
        skill:"WEB DEVELOPMENT",
        about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores facere vel consectetur labore possimus cum quasi natus, facilis laudantium, minima adipisci enim nemo sed omnis nam magni nisi rerum. Quia!"

    },
    {
    image:"image2.jpg",
    name:"Alex Hales",
    skill:"GAME DEVELOPMENT",
    about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at labore blanditiis nostrum error itaque repellat recusandae accusantium, consequuntur quibusdam consectetur neque, facilis esse aspernatur commodi, nulla dolore non doloribus!"
},
{
    image:"image5.jpg",
    name:"Malala Yousafzai",
    skill:"BACKEND DEVELOPMENT",
    about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus ex reiciendis vitae excepturi tempore dolor commodi quam nihil ducimus quod mollitia pariatur expedita provident debitis, natus et velit nostrum."
},
{
    image:"image3.jpeg",
    name:"Nitish Rana",
    skill:"MACHINE LEARNING",
    about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos dicta ut minima debitis neque error ullam totam? Qui amet praesentium nemo nostrum et nesciunt vero consequuntur dolorum doloribus animi!"
},
{
    image:"image4.jpg",
    name:"Smriti Mandana",
    skill:"ARTIFICIAL INTELLIGENCE",
    about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ex consectetur officiis, perspiciatis soluta eveniet harum enim commodi fugit modi incidunt! Rem amet explicabo accusamus cum. Omnis molestias optio tempora?"
}
];
const Name=document.getElementById("name");
const pic=document.getElementById("image");
const expert=document.getElementById("skill");
const description=document.getElementById("about");
const rightBtn=document.getElementById("right");
const leftBtn=document.getElementById("left");

// console.log(pic.src)
window.addEventListener("load",function () {
    pic.src=arr[0].image;
    Name.textContent=arr[0].name;
    expert.textContent=arr[0].skill;
    description.textContent=arr[0].about;
  });
  var count=0;
rightBtn.addEventListener("click",function () {
    count++;
    if(count>=arr.length)
    {
     count=count%arr.length;
    }
    pic.src=arr[count].image;
    Name.textContent=arr[count].name;
    expert.textContent=arr[count].skill;
    description.textContent=arr[count].about;

  });
  leftBtn.addEventListener("click",function () {
      count--;
      if(count<0 && count>-arr.length)
      {
          count+=arr.length;
      }
      else if(count<=-arr.length)
      {
          count=0;
      }
      pic.src=arr[count].image;
    Name.textContent=arr[count].name;
    expert.textContent=arr[count].skill;
    description.textContent=arr[count].about;
      
    })