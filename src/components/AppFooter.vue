<template>
  <footer class="footer">
    <section class="container">
      <!--  First row  -->
      <div class="footer-content">
        <!--   Телефон и соц сети   -->
        <div class="footer-coords-wrapper">
          <div class="footer-coords">
            <a class="footer-coords__tel" href="tel:88007751575">8 (800) 775-15-75</a>
            <address class="footer-coords__address">г. Москва, ул. Островная, 4</address>
          </div>

          <!--    Social Icons      -->
          <div class="footer-social-list--desktop">
            <app-footer-social-icons
              :social-links="socialLinks"
            />
          </div>
        </div>
        <!--   Нагация по странице   -->
        <nav class="footer-navigate">
          <ul class="footer-navigate-list">
            <li class="footer-navigate__item">Страховые продукты</li>
            <li class="footer-navigate__item">О нас</li>
            <li class="footer-navigate__item">Партнеры</li>
            <li class="footer-navigate__item">Контакты</li>
          </ul>
        </nav>
        <!--    Social Icons      -->
        <div class="footer-social-list--mobile">
          <app-footer-social-icons
            :social-links="socialLinks"
          />
        </div>
        <article class="footer-refs">
          <p class="footer-copyright-symbol">© Страховое акционерное<br>общество “ВСК”, 2002–2022</p>
          <a class="footer-politics" href="#">Политика в отношении обработки<br>персональных данных</a>
        </article>
      </div>
      <!--  Second row  -->
      <div class="footer-confidentiality">
        <img
          class="footer-confidentiality__img"
          src="@/assets/image/footer/important.png"
          alt="important"
          title="Важная информация"
        >
        <p class="footer-confidentiality__text">информацию, подлежащую раскрытию в соответствии с требованиями федерального закона «о рынке ценных бумаг» (от 22.04.1996 n 39-фз) и положения о раскрытии информации эмитентами эмиссионных ценных бумаг (утв. банком россии 30.12.2014 n 454-п), сао «вск» раскрывает на странице в сети интернет ооо «интерфакс-црки» – информационного агентства, аккредитованного цб рф на раскрытие информации, по адресу:
          <a class="footer-confidentiality__text-link" href="http://www.e-disclosure.ru/portal/company.aspx?id=1968">http://www.e-disclosure.ru/portal/company.aspx?id=1968</a>
        </p>
        <p class="footer-confidentiality__text">информацию, подлежащую раскрытию в соответствии с требованиями федерального закона «о рынке ценных бумаг»(от 22.04.1996 n 39-фз) и положения о раскрытии информации эмитентами эмиссионных ценных бумаг (утв. банком россии 30.12.2014 n 454-п), сао «вск» раскрывает на странице в сети интернет ооо «интерфакс-црки» – информационного агентства, аккредитованного цб рф на раскрытие информации, по адресу:
          <a class="footer-confidentiality__text-link" href="http://www.e-disclosure.ru/portal/company.aspx?id=1968">http://www.e-disclosure.ru/portal/company.aspx?id=1968</a>
        </p>
      </div>
    </section>
  </footer>
</template>

<script>
import AppFooterSocialIcons from '@/components/AppFooterSocialIcons'

export default {
  name: 'AppFooter',
  components: {
    AppFooterSocialIcons
  },
  data() {
    return {
      socialLinks: [
        {
          src: 'https://zooblog.ru/wp-content/uploads/2021/01/joshua-j-cotten-uffvghtoqhc-unsplash.jpg',
          img: 'YouTube.png'
        },
        {
          src: 'https://zooblog.ru/wp-content/uploads/2021/01/joshua-j-cotten-uffvghtoqhc-unsplash.jpg',
          img: 'vk.png'
        },
        {
          src: 'https://zooblog.ru/wp-content/uploads/2021/01/joshua-j-cotten-uffvghtoqhc-unsplash.jpg',
          img: 'tg.png'
        },
        {
          src: 'https://zooblog.ru/wp-content/uploads/2021/01/joshua-j-cotten-uffvghtoqhc-unsplash.jpg',
          img: 'classmates.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@use "@/assets/styles/_mixins.scss";
@use "@/assets/styles/_colors.scss";

.footer {
  color: colors.$textWhite;
  background: linear-gradient(92.15deg, colors.$textAccent 20.21%, colors.$textAccentDark 100%);
  padding: 40px 0;

  @media (min-width: 876px) {
    padding: 90px 0 73px;
  }

  &-social-list {
    &--mobile {
      margin-bottom: 16px;
      @media (min-width: 876px) {
        display: none;
      }
    }

    &--desktop {
      display: none;

      @media (min-width: 876px) {
        display: flex;
      }
    }
  }

  &-content {
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 876px) {
      text-align: left;
      margin-bottom: 100px;
      padding: 0 20px;
      flex-direction: row;
      justify-content: space-between;
    }

    @media (min-width: 1100px) {
      padding: 0 70px;
    }
  }

  &-coords {
    margin-bottom: 49px;

    @media (min-width: 876px) {
      margin-bottom: 0;
    }

    &__tel {
      @include mixins.setFontParams(600, 30px);
      display: inline-block;
      text-decoration: none;
      margin-bottom: 30px;
      color: colors.$textWhite;

      @media (min-width: 876px) {
        margin-bottom: 13px;
      }

      @media (min-width: 1100px) {
        font-size: 33px;
      }
    }

    &__address {
      @include mixins.setFontParams(400, 18px);
      margin-bottom: 19px;
    }

    &-wrapper {}
  }

  &-navigate {
    @media (min-width: 876px) {
      margin-left: 4%;
    }

    @media (min-width: 1100px) {
      margin-left: 10%;
    }

    &-list {
      padding: 0;
      margin: 0 0 50px;
      list-style-type: none;

      @media (min-width: 876px) {
        margin: 0;
      }
    }

    &__item {
      cursor: pointer;
      @include mixins.setFontParams(400, 18px);

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  &-refs {}

  &-copyright-symbol {
    @include mixins.setFontParams(600, 18px);
    text-transform: uppercase;
    margin: 0 0 10px;

    @media (min-width: 1100px) {
      font-size: 24px;
      margin: 0 0 32px;
    }
  }

  &-politics {
    color: colors.$textWhite;
    text-decoration: none;
    @include mixins.setFontParams(400, 16px);
    cursor: pointer;

    @media (min-width: 1100px) {
      font-size: 18px;
    }
  }

  &-confidentiality {
    display: flex;
    flex-direction: column;

    @media (min-width: 876px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__img {
      width: 105px;
      height: 105px;
      display: none;

      @media (min-width: 876px) {
        display: block;
      }

      @media (min-width: 876px) {
        margin-right: 30px;
      }

      @media (min-width: 1220px) {
        margin-right: 80px;
      }
    }

    &__text {
      @include mixins.setFontParams(600, 14px);
      text-transform: uppercase;
      margin: 0;

      &:last-child {
        margin-top: 20px;
      }

      @media (min-width: 876px) {
        &:last-child {
          margin-top: 0;
          margin-left: 30px;
        }
      }

      &-link {
        color: colors.$textWhite;
      }
    }
  }
}
</style>
