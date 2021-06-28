const array = [
    {
        id:0,
        title : "Dining",
        desc : "Our Restaurant offers some of most sought-after dining experiences with internationally recognized standards for service and cuisine. Appease your taste buds and dine in style!",
        img : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
        id:1,
        title : "Accomodation",
        desc : "Rooms are both comfortable and elegant with full baths, sturdy and rustic wooden furniture. In addition, suites include an extra sitting room",
        img : "https://images.unsplash.com/photo-1596618502142-d2a9d0c1fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
        id:2,
        title : "Adventure",
        desc : "A theme park is a place with attractions made up of rides, such as roller coasters and water rides. They usually contain a selection of different types of rides",
        img : "https://images.unsplash.com/photo-1582198790133-3692e01f649c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
        id:3,
        title : "Safety",
        desc : "Safety means being free from harm, and free from the risk of future harm as well. There are several different precautions that we can take to stay safe.",
        img : "https://images.unsplash.com/photo-1563393934034-21b781d905ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
];

const featureFun = () => {
    const feature = document.querySelectorAll(".feature-subdiv");
    const t = document.querySelector(".feature-title");
    const d = document.querySelector(".content-div .desc");
    const i = document.querySelector(".image-content img");
    window.addEventListener("load" , () => {
        let {title , desc, img} = array[0];
        //  console.log(title, desc , )
        t.innerText = title;
        d.innerText = desc;
        i.setAttribute("src",img)
        feature[0].classList.add("active");
        
    })
    feature.forEach((f,idx) => {
        f.addEventListener("click", () => {
            feature.forEach(f => {
                f.classList.remove("active");
            })
            helper(f , idx)
        })
    })
     function helper (f, idx){
         let {title , desc, img} = array[idx];
        //  console.log(title, desc , )
        t.innerText = title;
        d.innerText = desc;
        i.setAttribute("src",img)
        f.classList.add("active");
     }

}

export default featureFun;