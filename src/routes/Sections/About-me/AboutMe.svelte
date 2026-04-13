<script lang="ts">
  import imgEnhanced from './img.png?enhanced&format=webp&quality=100'

  import {
    text_childhood_title,
    text_childhood_content,
    text_company_title,
    text_company_content,
    text_inspiration,
  } from "$lib/paraglide/messages"
</script>

<section>
  <div class="section-divider">
    <hr>
    <h2 class="section-name">Обо мне</h2>
  </div>

  <div class="container">
    <div class="img">
      <img src={imgEnhanced.img.src} alt="Рюкзак с вещами для путешествий">
    </div>

    <div class="content">
      <h3>{text_childhood_title()}</h3>
      <p>{text_childhood_content()}</p>
    </div>

    <div class="content">
      <h3>{text_company_title()}</h3>
      <p>{text_company_content()}</p>
    </div>

    <div class="inspiration-text">
      {@html text_inspiration()}
    </div>
  </div>
</section>

<style lang="scss">
  @use "_mixins/font";

  section {
    position: relative;
    height: 100vh;
  }

  .section-divider {
    position: relative;
  }

  .container {
    height: 100%;
    grid-template-rows: repeat(2, 1fr);
  }

  .section-name {
    position: absolute;
    top: 0;
    left: 0;

    margin: 0;

    @include font.main;
    font-weight: 400;
    font-size: 32px;

    opacity: .5;
  }

  .img {
    grid-column: span 2;
    grid-row: span 2;

    position: relative;

    img {
      position: absolute;
      right: 0;
      bottom: 106px;
      height: 622px;
    }
  }

  .inspiration-text {
    grid-column: 3 / 7;
    grid-row: 2;

    font-style: normal;
    font-weight: 600;
    font-size: 63px;
    text-align: center;
    line-height: 170%;

    @include font.main;
    color: #FFFFFF;

    text-shadow: 0 0 35.4px rgba(255, 255, 255, 0.46);
  }

  .content {
    grid-column: span 2;

    line-height: 1.7;
    font-size: 20px;

    h3 {
      font-weight: 500;
    }

    p {
      font-weight: 200;
    }
  }

  hr {
    margin: 20px 0 0;
  }
</style>