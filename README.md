<h1> Bayzat Frontend Assignment </h1>

A simple movie application which fetches data from an array, allows for searches and lets you add to favorites list. The design of the project is based on Netflix. 

<h3> | <a href="https://www.loom.com/share/2ed66d44c3194443a3c9b8fac9340da9"> Video Explanation </a>| <a href="https://lighthearted-sfogliatella-f4605c.netlify.app/"> Live View </a>| </h3>

<h1> Overview of Evaluation criteria </h1>

A. Fixing type issues : Due to react facing updates more fequently than ever, an issue with package and component versions keeps making problems. The same happened to me in this project where I had to create a seperate react app and import the data. I wrote most of my code in JS, but managed to solve the type error at App.tsx where I was suppposed to declare the type for UseState. 

Code snippet:   **const [rightList, setRightList] = useState<Movie[]>([]);**

The code is error free by declaring the type for the state
![zeroTypeError](https://user-images.githubusercontent.com/98485187/196580968-702d7b43-f3e4-4a28-b3a3-978b8930af1b.PNG)

Multiple type errors creep in when the code snippet is altered.
![typeerror](https://user-images.githubusercontent.com/98485187/196581140-0e02fa06-d55f-447a-a540-5a51d68a764e.PNG)

B. Performance improvements: With the improved design, the 'add to favorites' became faster and less confusing, thus resulting in a better performance. Since this is a frontend based application, assesing performance on various factors is not possible. An addition could be adding the data into mongo DB or Supabase and connecting it to the Frontend. 

C. Semantic elements: Extensive use of Semantic elements has been done throughout the project, with Material Ui elements forming a major part of the project as well.

D. Apply best React practices: I have tried to follow all the best practices right from DRY ( do not repeat yourself ) to clean code. Sepearate component folders with independent CSS files were created. The folder structure is clean and easy to understand. 

![folders](https://user-images.githubusercontent.com/98485187/196584300-847fc326-af6e-4383-b4c3-d82ee10e84fc.PNG)

E. Components reusability: The movie cards are being displayed by a 'Single component' which has been reused at the Favorites page. The context API has been used at multiple pages to keep an account of the states being mutated. 

F. Fixing responsiveness: The application is completely screen responsive with the margins, paddings and component sizes adjusting wrt the screen.

Mobile Screen

![mobilesiize](https://user-images.githubusercontent.com/98485187/196585394-412c8159-bdf9-41a8-99c8-3c2bff88f620.PNG)

Tablet Screen

![tabSize](https://user-images.githubusercontent.com/98485187/196585422-66da71b5-fd87-433e-a6c2-15ccd0b525bb.PNG)

PC Screen size

![pcSize](https://user-images.githubusercontent.com/98485187/196585449-877b1742-7d79-4e02-9ff4-85a4afd257fe.PNG)

E. Repository cleanup: Unwanted packages have been uninstalled and code has been written in a way to make sure the knowledge transfer in future is easy.

<h1> Overview of Bonus criteria </h1>

A. Improve UI/UX: There is always room for improvement on the project, but this is one of the best UI that could be created with Netflix being the direct inspiration for this movie app. 

B. Clean commit history: Couldn't be more cleaner :)


<h1>Future improvements I wish to make </h1> 
<ul>
<li>Switch the project into TS completely while using Next JS for frontend.</li>

<li>Delete or remove button into favorites section.</li>

<li>Saving the favorites section to local storage.</li>

<li>Saving the card state to local storage to ensure the icons remain saved on page refresh too.</li>
</ul>
