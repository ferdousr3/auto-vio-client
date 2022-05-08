import React from "react";
import Blog from "../../components/Blog/Blog";

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
          ans="Node.js is a Javascript engine that can be used to build any type of application (by programming in the Javascript language). Javascript code is executed. It's most commonly used to make web servers, but it may also be used to make a variety of other programs.MongoDB is a database system. Code within an application or server uses MongoDB to save, query, and update data in a database. MongoDB will be used to store data on many Node.js web servers.MongoDB is a Nodejs API library that allows you to create databases and then add, query, change, or delete data from them programmatically. MongoDB also includes Python, Java, and more programming languages API libraries."
        />
        {/* ques 3 */}
        <Blog
          ques="Differences between SQL and NoSQL databases"
          ans="SQL database is a relational database and NoSQL database is a non-relational database.SQL database is used as multiple database structures with query language(SQL) but NoSQL database store as an unstructured database store as document-oriented, as a key-value store. SQL database is vertically scalable and it's a table-based database. NoSQL database is horizontally scalable and it's a key-value pairs  based databas"
        />
        {/* ques 4 */}
        <Blog
          ques="What is the purpose of jwt and how does it work"
          ans="JWT or JSON Web Token for used to share security information between two parties — a client and a server — to exchange security information. Each JWT includes encoded JSON objects as well as a set of assertions. JWTs use a cryptographic technique to verify that the claims cannot be changed after the token is issued.JWTs are distinct from conventional web tokens in that they include a set of claims. Claims are used to send data between two parties. The nature of these assertions is determined by the use case at hand. A claim may say, for example, who issued the token, how long it is valid, or what rights the client has been granted."
        />
      </div>
    </>
  );
};

export default Blogs;
