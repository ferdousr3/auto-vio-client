import React from 'react';
import Blog from '../../components/Blog/Blog';

const Blogs = () => {
  return (
    <>
      <div className="bg-main py-20">
        {/* ques 1 */}
        <Blog
          ques="Difference between javascript and nodejs"
          ans="JavaScript is a scripting language that may be used in web browsers. Node.js, on the other hand, is a JavaScript interpreter or execution environment that includes a large number of necessary libraries and other components. JavaScript is a single defining programming language that can operate in every browser using the default browser environment. It's a powerful language that's typically utilized in a web application for any type of verification or business logic.Node.js also comes with a slew of related libraries that we frequently use in javascript for general-purpose programming. It's a JavaScript interpreter or environment that can display and execute any JavaScript application."
        />
        {/* ques 2 */}
        <Blog
          ques="When should you use nodejs and when should you use mongodb"
          ans="ON the Manage Inventories page, there will be a button named add new item. You can change the name of the button if you want. You will be taken to the add inventory item page by clicking on this button. There will be able to add a new inventory item. Feel free to use, react hook form or html5 form. On this page, you can put an input field to put an image url. (For simplicity, you can upload the image to imgbb or other images hosting website and then put the url on the input field)"
        />
        {/* ques 3 */}
        <Blog
          ques="Differences between sql and nosql databases"
          ans="ON the Manage Inventories page, there will be a button named add new item. You can change the name of the button if you want. You will be taken to the add inventory item page by clicking on this button. There will be able to add a new inventory item. Feel free to use, react hook form or html5 form. On this page, you can put an input field to put an image url. (For simplicity, you can upload the image to imgbb or other images hosting website and then put the url on the input field)"
        />
        {/* ques 4 */}
        <Blog
          ques="What is the purpose of jwt and how does it work"
          ans="ON the Manage Inventories page, there will be a button named add new item. You can change the name of the button if you want. You will be taken to the add inventory item page by clicking on this button. There will be able to add a new inventory item. Feel free to use, react hook form or html5 form. On this page, you can put an input field to put an image url. (For simplicity, you can upload the image to imgbb or other images hosting website and then put the url on the input field)"
        />
      </div>
    </>
  );
};

export default Blogs;