<template>
  <div>
    <div class="projects-cards">
      <div class="container">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image">
                <img src="../assets/projects-imgs/data_lovers_project_2.png" class="responsive-img" />
              </div>
              <div class="card-content">
                <div class="card-title title">Data Lovers</div>
                <p class="justify text">
                  This page feeds from an
                  <strong>API</strong> with data from
                  <strong>The World Bank</strong>, and it shows it in dinamic HTML tables, and on
                  <a
                    href="https://www.chartjs.org/"
                  >Chart.js</a>
                  graphs.
                </p>
              </div>
              <div class="card-action">
                <a
                  href="https://pau-za.github.io/cdmx-2019-01-bc-core-data-lovers/src/"
                  target="blank"
                  class="pointer text"
                >Go to site</a>
                <a
                  href="https://github.com/Pau-za/cdmx-2019-01-bc-core-data-lovers/tree/master/src"
                  target="blank"
                  class="pointer text"
                >Code page</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image">
                <img src="../assets/projects-imgs/mdlinks3.png" class="responsive-img" />
              </div>
              <div class="card-content">
                <div class="card-title title">Markdown Links</div>
                <p class="justify text">
                  I used vanilla <strong>JavaScript</strong> and <strong>Node.js</strong> to develop a program capable of identify, trhough the
                  <strong>command terminal</strong>, all the links present in a 
                  <strong>Markdown</strong> document. The program is able to validate if the links are broken or not.
                </p>
              </div>
              <div class="card-action">
                <a
                  href="https://www.npmjs.com/package/markdown-find-links"
                  target="blank"
                  class="pointer text"
                >Download page</a>
                <a
                  href="https://github.com/Pau-za/CDMX007-fe-md-links"
                  target="blank"
                  class="pointer text"
                >Code page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col s12 m6 l6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/projects-imgs/bq.jpg" class="responsive-img" />
            </div>
            <div class="card-content">
              <div class="card-title title">Burger Queen</div>
              <p class="justify text">
                I developed a web app
                to help a restaurante employees to take the clients orders, using the javascript framework:
                <strong>Vuejs</strong>.
              <br>
                It feeds from a data base hosted in
                <strong>Firestore of Firebase</strong>, and it updates in real time everytime the user sends a new order.
              </p>
            </div>
            <div class="card-action">
              <a
                href="https://burger-queen-project.firebaseapp.com/#/"
                target="blank"
                class="pointer text"
              >Go to site</a>
              <a
                href="https://github.com/Pau-za/CDMX007-fe-burger-queen"
                target="blank"
                class="pointer text"
              >Code page</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6 l6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/projects-imgs/keep-in-touch-2.png" class="responsive-img" />
            </div>
            <div class="card-content">
              <div class="card-title title">Keep in Touch</div>
              <p class="justify text">
                I used
                <strong>Vue</strong>,
                <strong>Materialize</strong> and <strong>Firebase</strong> to create a page that helps
                students of a eurpean masters program to keep in touch even when they are no loger living in the same city.
              </p>
            </div>
            <div class="card-action">
              <a
                href="https://keepintouch-eur.web.app/#/"
                target="blank"
                class="pointer text"
              >Go to site</a>
              <a
                href="https://github.com/Pau-za/keepintouch"
                target="blank"
                class="pointer text"
              >Code page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsProjects"
};
</script>

<style scoped>
strong {
  font-weight: bolder;
}
</style>
