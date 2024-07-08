<template>
  <div class="footer">
    <h1>Stay in Touch</h1>
    <section>
      <input
        class="in1"
        type="text"
        name=""
        id=""
        placeholder="Enter your email address"
      />
      <button>Submit</button>
    </section>
  </div>
  <div class="footer-nav">
    <ul>
      <h2 class="h2">Escape.</h2>
    </ul>
    <ul>
      <li>HOME</li>
      <li>CATEGORIES</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  background-image: url(/src/assets/footerimg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 308px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 30px;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  padding-bottom: 10px;
  color: #ffff;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.in1 {
  width: 305px;
  height: 50px;
  background-color: #ffffff;
  border: none;
  padding: 0 0 0 20px;
}
button {
  width: 125px;
  height: 50px;
  border: none;
  background-color: #817575;
}
.footer-nav {
  display: flex;
  align-items: end;
  justify-content: space-around;
  background-color: #232f38c3;
  padding: 20px 0;
}
.h2 {
  color: #ffffff;
  font-size: 20px;
}
ul {
  display: flex;
  gap: 50px;
  list-style: none;
}
li {
  font-size: 15px;
  opacity: 50%;
  color: #ffffff;
}

@media (max-width: 600px) {
  ul {
    gap: 20px;
  }
}
@media (max-width:700px) {
  .in1[data-v-ce5fb19b]{
    width: 200px;
  }
  button[data-v-ce5fb19b]{
    width: 90px;
  }
}
</style>
