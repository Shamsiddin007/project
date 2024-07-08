<template>
  <div class="most">
    <h1 class="most-h1">Most Recent</h1>
    <div class="most-parent">
      <div class="most-child">
        <img class="most-img" src="/src/assets/havoshar.png" alt="" />
        <h1 class="most-child-h1">Still Standing Tall</h1>
        <p class="most-child-p">Life begins at the end of your comfort zone.</p>
        <div class="most-flex1">
          <div class="most-flex-child">
            <img src="/src/assets//wong.png" alt="" />
            <p>William Wong</p>
          </div>
          <p>9/25/2015</p>
        </div>
      </div>
      <div class="most-child">
        <img class="most-img" src="/src/assets/sunny.png" alt="" />
        <h1 class="most-child-h1">Sunny Side Up</h1>
        <p>No place is ever as bad as they tell you it’s going to be.</p>
        <div class="most-flex">
          <div class="most-flex-child">
            <img src="/src/assets/Mat.png" alt="" />
            <p>William Wong</p>
          </div>
          <p>9/25/2015</p>
        </div>
      </div>
      <div class="most-child">
        <img class="most-img" src="/src/assets/water.png" alt="" />
        <h1 class="most-child-h1">Water Falls</h1>
        <p>We travel not to escape life, but for life not to escape us.</p>
        <div class="most-flex">
          <div class="most-flex-child">
            <img src="/src/assets/Mat.png" alt="" />
            <p>Mat Vogels</p>
          </div>
          <p>9/25/2015</p>
        </div>
      </div>

      <div class="most-child">
        <img class="most-img" src="/src/assets/thought.png" alt="" />
        <h1 class="most-child-h1">Through the Mist</h1>
        <p>Travel makes you see what a tiny place you occupy in the world.</p>
        <div class="most-flex">
          <div class="most-flex-child">
            <img src="/src/assets/Mat.png" alt="" />
            <p>William Wong</p>
          </div>
          <p>9/25/2015</p>
        </div>
      </div>
      <div class="most-child">
        <img class="most-img" src="/src/assets/avaken.png" alt="" />
        <h1 class="most-child-h1">Awaken Early</h1>
        <p>Not all those who wander are lost.</p>
        <div class="most-flex1">
          <div class="most-flex-child">
            <img src="/src/assets/Mat.png" alt="" />
            <p>Mat Vogels</p>
          </div>
          <p>9/25/2015</p>
        </div>
      </div>
      <div class="most-child">
        <img class="most-img" src="/src/assets/water.png" alt="" />
        <h1 class="most-child-h1">Try it Always</h1>
        <p>
          The world is a book, and those who do not travel read only one page.
        </p>
        <div class="most-flex">
          <div class="most-flex-child">
            <img src="/src/assets/Mat.png" alt="" />
            <p>Mat Vogels</p>
          </div>
          <p>9/25/2015</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.most {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
.most-h1 {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
}
.most-img {
  width:  296px;
  height: 150px;
}
.most-parent {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  /* grid-template-rows: repeat(1, 1fr); */
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  gap: 30px;

  /* display: grid;
        grid-template-columns:auto auto auto; */
}
.most-child {
  width: 296px;
  background-color: #fcfcfc;
}
.most-flex1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  border-top: 0.1px solid black;
  padding-top: 20px;
}
.most-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  border-top: 0.1px solid black;
  padding-top: 20px;
}
.most-flex-child {
  display: flex;
  gap: 10px;
  align-items: center;
}
p {
  opacity: 50%;
}
.most-child-h1{
  font-size: 25px;
  padding: 10px 0;
  font-family: serif;
}
@media (max-width:981px) {
        .most-parent{
            display: grid;
            grid-template-columns: repeat(2,3fr);
        }
    }
    @media (max-width:650px) {
        .most-parent{
            display: grid;
            grid-template-columns: repeat(1,3fr);
        }
    }

</style>
