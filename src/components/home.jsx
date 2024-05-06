import React from "react";
import UserForm from "./userforms";

const Home = () => {
  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header bg-primary text-white">
                Welcome to our Library Management Application!
              </div>
              <div class="card-body">
                <p class="card-text">
                  Explore the world of books with our user-friendly and
                  efficient library management system. Whether you're a student,
                  an avid reader, or a librarian, our platform is designed to
                  enhance your library experience.
                </p>
                <p class="card-text">With our application, you can:</p>
                <ul class="list-group">
                  <li class="list-group-item">
                    Manage: Keep track of your borrowed books, due dates, and
                    reading history effortlessly. Renew or reserve books with
                    just a few clicks.
                  </li>
                </ul>
              </div>
              <div class="card-footer text-muted">
                Join us on a journey of knowledge, imagination, and endless
                reading possibilities. Happy reading!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add any other content specific to the home page */}
    </div>
  );
};

export default Home;
