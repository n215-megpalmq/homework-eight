var homeContent=`<div class="home">
<h1>Home Page</h1>
<img src="images/spring.gif">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, soluta cupiditate? Quos veritatis non magnam et rerum velit quia ipsa consequuntur suscipit voluptatem beatae, deserunt delectus dignissimos quaerat, officia assumenda!</p>
<p>Enim adipisci excepturi iusto ullam in, aliquid repellat voluptas natus facere rem? Asperiores numquam nobis corrupti temporibus cum fuga hic. Nesciunt dolorem sapiente at adipisci assumenda ducimus possimus expedita omnis?</p>
<p>Sapiente deserunt fugiat optio quas consequatur cum impedit distinctio dicta totam eos quaerat, unde aut ipsam rem, ad, iure aliquid ducimus aperiam architecto perspiciatis voluptas. Minima necessitatibus molestias officia assumenda.</p>
<div class="testButton" onclick="testButton()">Click Me</div>
</div>`;
var aboutContent=`<div class="about">
<div class="flex">
<h1>About Page</h1>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt at perspiciatis quidem. Quae maiores eum magnam, vitae, corporis alias qui nam voluptatem debitis earum delectus ducimus dolores. Quam, aspernatur optio!</p>
<p>Quaerat minima maxime facilis iusto autem distinctio quis quidem, voluptatem, quas facere vel accusamus corporis eum culpa, nesciunt voluptates corrupti. Ab alias rerum nesciunt enim sint ipsa quidem commodi quae.</p>
<p>Voluptate magnam voluptatum optio dolore sapiente nesciunt quo ex unde excepturi, voluptas odit pariatur dolorum quam rerum illum! Numquam esse ullam omnis id autem magnam explicabo ab aspernatur assumenda neque.</p>
<p>Cupiditate enim doloremque iste eveniet voluptate ab! Quia sint molestiae odit est labore reiciendis blanditiis sapiente cum corrupti delectus animi repellendus voluptate id dolorum, pariatur perferendis in ad eligendi odio.</p>
<p>Neque ullam ab expedita, officia hic corporis quaerat architecto quidem aliquid animi at repudiandae quae laborum recusandae minus. Dolore non nobis voluptas. Eius repudiandae soluta hic, expedita consectetur qui dicta.</p></div>
<img src="images/field.jpg" alt="field">
</div>`;
var productsContent= `<div class="products">
<h1>Products Page</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt at perspiciatis quidem. Quae maiores eum magnam, vitae, corporis alias qui nam voluptatem debitis earum delectus ducimus dolores. Quam, aspernatur optio!</p>
<p>Quaerat minima maxime facilis iusto autem distinctio quis quidem, voluptatem, quas facere vel accusamus corporis eum culpa, nesciunt voluptates corrupti. Ab alias rerum nesciunt enim sint ipsa quidem commodi quae.</p>
<p>Voluptate magnam voluptatum optio dolore sapiente nesciunt quo ex unde excepturi, voluptas odit pariatur dolorum quam rerum illum! Numquam esse ullam omnis id autem magnam explicabo ab aspernatur assumenda neque.</p>
<p>Cupiditate enim doloremque iste eveniet voluptate ab! Quia sint molestiae odit est labore reiciendis blanditiis sapiente cum corrupti delectus animi repellendus voluptate id dolorum, pariatur perferendis in ad eligendi odio.</p>
<p>Neque ullam ab expedita, officia hic corporis quaerat architecto quidem aliquid animi at repudiandae quae laborum recusandae minus. Dolore non nobis voluptas. Eius repudiandae soluta hic, expedita consectetur qui dicta.</p>
<img src="images/rain.gif" alt="rain">
</div>`; 
var contactContent= `<div class="contact">
<div class="flex">
<h1>Contact Page</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum id commodi tempora repellat atque dignissimos qui earum, rerum nam, non debitis corrupti! Sequi voluptate consequatur repellendus inventore natus vitae commodi.</p>
<input type="text" placeholder="name">
<input type="text" placeholder="email">
<input type="text" placeholder="phone number">
<input type="text" placeholder="favorite anime">
<button>Submit</button>

<img src="images/ty.gif" alt="thanks"></div>
</div>`;       

function initListeners() {
    $("nav a").on("click",(e) =>{
        let btnID= e.currentTarget.id;
        loadContent(btnID);
    })
}

function loadContent(pageName){
    let pageContent= pageName + "Content";
    $("#app").html(eval(pageContent));
    
}

function testButton (){
    alert("hi there");
}
 
$(document).ready(function () {
    loadContent("home");
initListeners();
});