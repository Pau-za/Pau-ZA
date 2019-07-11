<template>
  <div class="container">
    <ul class="collection with-header">
      <li class="collection-item">
        <div class="text">
          E-mail: molo_pau@hotmail.com
          <a
            href="mailto:molo_pau@hotmail.com"
            class="secondary-content"
            target="blank"
          >
            <i class="material-icons">contact_mail</i>
          </a>
        </div>
      </li>
      <li class="collection-item">
        <div class="text">
          Github
          <a href="https://github.com/Pau-za" class="secondary-content" target="blank">
            <i class="fab fa-github"/>
          </a>
        </div>
      </li>
      <li class="collection-item">
        <div class="text">
          LinkedIn
          <a
            href="https://www.linkedin.com/in/pau-za/"
            class="secondary-content"
            target="blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactInfo"
};
</script>

<style scoped>
.fab {
  font-size: x-large;
}
</style>

