<template>
  <div>
    <div class="projects-cards">
      <div class="container">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image">
                <img src="../assets/projects-imgs/cipher_project_3.jpg" class="responsive-img">
              </div>
              <div class="card-content">
                <div class="card-title">Cipher</div>
                <p class="justify">
                  I used
                  <strong>vanilla javascript</strong>,
                  <strong>HTML 5</strong>, and
                  <strong>
                    CSS
                    3
                  </strong> to create a page where you can code and decode any message using
                  <strong>Caesar's cipher</strong>.
                </p>
              </div>
              <div class="card-action">
                <a
                  href="https://pau-za.github.io/cdmx-2019-01-bc-core-am-cipher/src/"
                  target="blank"
                  class="pointer"
                >Go to site</a>
                <a
                  href="https://github.com/Pau-za/cdmx-2019-01-bc-core-am-cipher/tree/master/src"
                  target="blank"
                  class="pointer"
                >Code page</a>
              </div>
            </div>
          </div>

          <div class="col s12 m6 l6">
            <div class="card">
              <div class="card-image">
                <img src="../assets/projects-imgs/data_lovers_project_2.png" class="responsive-img">
              </div>
              <div class="card-content">
                <div class="card-title">Data Lovers</div>
                <p class="justify">
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
                  class="pointer"
                >Go to site</a>
                <a
                  href="https://github.com/Pau-za/cdmx-2019-01-bc-core-data-lovers/tree/master/src"
                  target="blank"
                  class="pointer"
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
              <img src="../assets/projects-imgs/mdlinks3.png" class="responsive-img">
            </div>
            <div class="card-content">
              <div class="card-title">Markdown Links</div>
              <p class="justify">
                Here I utilized vanilla JS to identify, trhough the
                <strong>bash terminal</strong>, the number of links
                any
                <strong>Markdown</strong> document inside the directory path the user writes has, and it can validate if they are broken or ok liks.
              </p>
            </div>
            <div class="card-action">
              <a
                href="https://www.npmjs.com/package/markdown-find-links"
                target="blank"
                class="pointer"
              >Download page</a>
              <a
                href="https://github.com/Pau-za/CDMX007-fe-md-links"
                target="blank"
                class="pointer"
              >Code page</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6 l6">
          <div class="card">
            <div class="card-image">
              <img src="../assets/projects-imgs/bq.jpg" class="responsive-img">
            </div>
            <div class="card-content">
              <div class="card-title">Burger Queen</div>
              <p class="justify">
                I developed a web app
                to help a restaurante employees to take the clients orders, using the javascript framework:
                <strong>Vuejs</strong>.
              </p>
              <p>
                It feeds from a data base hosted in
                <strong>Firestore of Firebase</strong>, and it updates in real time everytime the user sends a new order.
              </p>
            </div>
            <div class="card-action">
              <a
                href="https://burger-queen-project.firebaseapp.com/#/"
                target="blank"
                class="pointer"
              >
                Go to site
              </a>
              <a
                href="https://github.com/Pau-za/CDMX007-fe-burger-queen"
                target="blank"
                class="pointer"
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
strong{
  font-weight: bolder;
}
</style>
