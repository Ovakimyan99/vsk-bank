<template>
  <!-- Header -->
  <app-header-bank class="container" />

  <!--  Первый экран-->
  <bank-first-screen class="bank--first-screen">
    <template #title>Гарантии</template>
    <template #subtitle>Для госзакупок</template>
  </bank-first-screen>

  <section class="container bank--second-screen">
    <app-title>Для госзакупок</app-title>
    <h2 class="whom-title">В рамках 44-ФЗ,<br>223-ФЗ и 615-ПП</h2>
    <div class="whom-list">
      <selection-point
        v-for="text of whomList"
        :key="text"
        :text="text"
        class="whom-item"
      />
    </div>
    <img class="whom-img" src="@/assets/image/bank/gas-bank.png" alt="север газ банк" title="север газ банк">
  </section>

  <!-- Для кого? -->
  <section class="container whom">
    <app-title>Для кого?</app-title>
    <div class="whom-list">
      <selection-point
        text="Участники госзакупок"
        class="whom-item"
      />
      <selection-point
        text="Преимущественно<br>малый и средний бизнес"
        class="whom-item"
      />
    </div>
  </section>

  <!-- Преимущества -->
  <section class="container">
    <app-title inversion>Преимущества</app-title>
    <check-list-wrapper class="benefist-wrapper">
      <check-list
        v-for="(_, idx) of benefits"
        :key="idx"
        :listLength="benefits.length"
        :text="benefits[idx]"
        :idx="idx"
        :exceptionIdx="exceptionIdx"
        @update:modelValue="v => exceptionIdx = v"
        class="benefist-item"
      />
    </check-list-wrapper>
  </section>

  <!-- Тарифы и документы -->
  <section class="container bank--mb">
    <app-title inversion>Тарифы и документы</app-title>

    <insurance-info class="incorais">
      <template #image>
        <img
          class="incorais-image"
          src="@/assets/image/main-content-1.png"
          alt="Что застраховано"
          title="Что застраховано"
        >
      </template>
      <insurance-info-list></insurance-info-list>
    </insurance-info>
  </section>

  <section class="container bank--mb">
    <!-- Отправить заявку -->
    <app-button class="bank--btn" @click="openModal">Отправить заявку</app-button>
  </section>

  <app-footer />

  <app-modal ref="modalForm">
    <template #title>
      Заполните форму
    </template>
    <template #form>
      <!--   FormInputsList   -->
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          placeholder="Принципал"
          :modelValue="principal"
          :error="v$.principal.$error"
          @update:modelValue="v => principal = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          :error="v$.innPrincipal.$error"
          placeholder="ИНН принципала"
          :modelValue="innPrincipal"
          @update:modelValue="v => innPrincipal = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          :error="v$.beneficiary.$error"
          placeholder="Бенефициар"
          :modelValue="beneficiary"
          @update:modelValue="v => beneficiary = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          :error="v$.innBeneficiary.$error"
          placeholder="ИНН бенефициара"
          :modelValue="innBeneficiary"
          @update:modelValue="v => innBeneficiary = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          :error="v$.linkToPurchase.$error"
          placeholder="Ссылка на закупку"
          :modelValue="linkToPurchase"
          @update:modelValue="v => linkToPurchase = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.choice"
          required
          :error="v$.typesOfContracts.picked.$error"
          placeholder="Вид контрактов"
          :valuesList="typesOfContracts.values"
          :modelValue="typesOfContracts.picked"
          @update:modelValue="v => typesOfContracts.picked = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.choice"
          required
          :error="v$.garantiesOfTypes.picked.$error"
          placeholder="Тип гарантий"
          :valuesList="garantiesOfTypes.values"
          :modelValue="garantiesOfTypes.picked"
          @update:modelValue="v => garantiesOfTypes.picked = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          :error="v$.termGuarantee.$error"
          placeholder="Сумма гарантий"
          :modelValue="termGuarantee"
          @update:modelValue="v => termGuarantee = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          :error="v$.warrantyPeriod.$error"
          placeholder="Срок гарантий"
          :modelValue="warrantyPeriod"
          @update:modelValue="v => warrantyPeriod = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          :error="v$.name.$error"
          placeholder="Имя"
          :modelValue="name"
          @update:modelValue="v => name = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          :error="v$.tel.$error"
          placeholder="Телефон"
          :modelValue="tel"
          @update:modelValue="v => tel = v"
        />
      </div>
      <div class="form-field">
        <form-custom-input
          :format="$options.formTypes.input"
          required
          :error="v$.email.$error"
          placeholder="Почта"
          :modelValue="email"
          @update:modelValue="v => email = v"
        />
      </div>
  </template>
  </app-modal>
</template>

<script>
import AppHeaderBank from '@/components/AppHeaderBank'
import AppFooter from '@/components/AppFooter'
import AppTitle from '@/components/AppTitle'
import AppModal from '@/components/AppModal'
import BankFirstScreen from '@/components/BankFirstScreen'
import CheckListWrapper from '@/components/CheckListWrapper'
import CheckList from '@/components/CheckList'
import InsuranceInfo from '@/components/InsuranceInfo'
import InsuranceInfoList from '@/components/InsuranceInfoList'
import SelectionPoint from '@/components/SelectionPoint'
import FormCustomInput from '@/components/FormCustomInput'
import { email, required, numeric } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core/dist/index.esm'
import { FORM_TYPE_CHOICE, FORM_TYPE_INPUT } from '@/consts'
import sendForm from '@/sendForm'

export default {
  name: 'AppBank',
  components: {
    AppHeaderBank,
    AppFooter,
    AppTitle,
    AppModal,
    BankFirstScreen,
    CheckListWrapper,
    CheckList,
    InsuranceInfo,
    InsuranceInfoList,
    SelectionPoint,
    FormCustomInput
  },
  formTypes: {
    input: FORM_TYPE_INPUT,
    choice: FORM_TYPE_CHOICE
  },
  setup () { return { v$: useVuelidate() } },
  data() {
    return {
      benefits: [
        'Быстрое<br>решение',
        'Он-лайн<br>заявка',
        'Всё в одном<br>месте',
        'Свободный лимит<br>на гарантию'
      ],
      whomList: [
        'Для участия <br>в конкурсах',
        'На гарантийный период',
        'Для заключения <br>контрактов',
        'Гарантию выпускает банк-партнёр<br>СЕВЕРГАЗБАНК на основании<br>заключения ВСК'
      ],
      exceptionIdx: 0,

      principal: '',
      innPrincipal: '',
      beneficiary: '',
      innBeneficiary: '',
      linkToPurchase: '',
      typesOfContracts: {
        values: ['44-ФЗ', '223-ФЗ', '185-ФЗ (615-ПП)'],
        picked: ''
      },
      garantiesOfTypes: {
        values: ['Для участия в конкурсе', 'Для заключения контракта', 'Для получения аванса', 'Для обеспечения гарантийных обязательств'],
        picked: ''
      },
      termGuarantee: '',
      warrantyPeriod: '',
      name: '',
      tel: '',
      email: ''
    }
  },
  methods: {
    async openModal() {
      const send = await this.$refs.modalForm.open()
      if (send) {
        const result = await this.v$.$validate()
        if (!result) return
        const str =
        `Принципал: ${this.principal};
        ИНН Принципала: ${this.innPrincipal};
        Бенефициар: ${this.beneficiary};
        ИНН Бенефициара ${this.innBeneficiary};
        Ссылка на закупку: ${this.linkToPurchase};
        Вид контракта: ${this.typesOfContracts.picked};
        Тип гарантии ${this.garantiesOfTypes.picked};
        Сумма гарантии: ${this.termGuarantee};
        Срок гарантии: ${this.warrantyPeriod};
        name ${this.name};
        tel: ${this.tel};
        email: ${this.email}`

        try {
          await sendForm(str)
          this.$refs.modalForm.assecc()
          this.clearModal()
        } catch (e) {
          alert('Не получилось отправить письмо на почту. Попробуйте снова!')
        }
      }
    },
    clearModal() {
      this.v$.$reset()
      this.principal = ''
      this.innPrincipal = ''
      this.beneficiary = ''
      this.innBeneficiary = ''
      this.linkToPurchase = ''
      this.typesOfContracts.picked = null
      this.garantiesOfTypes.picked = null
      this.termGuarantee = ''
      this.warrantyPeriod = ''
      this.name = ''
      this.tel = ''
      this.email = ''
    }
  },
  validations () {
    return {
      principal: { required },
      innPrincipal: { required, numeric },
      beneficiary: { required },
      innBeneficiary: { required, numeric },
      linkToPurchase: {},
      typesOfContracts: {
        picked: { required }
      },
      garantiesOfTypes: {
        picked: { required }
      },
      termGuarantee: { required, numeric },
      warrantyPeriod: { required },
      name: { required },
      tel: { required },
      email: { required, email }
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@use '@/assets/styles/colors';

.bank {
  &--mb {
    margin-bottom: 60px;

    @media (min-width: 560px) {
      margin-top: 70px;
    }

    @media (min-width: 968px) {
      margin-top: 100px;
    }

    @media (min-width: 1220px) {
      margin-bottom: 127px;
    }
  }

  &--btn {
    margin: 0 auto;
    display: block;
  }

  &--first-screen {
    :deep(.insurance-products--fon) {
      height: 100%;
    }
  }

  &--second-screen {
    margin-top: 50px;

    @media (min-width: 560px) {
      margin-top: 70px;
    }

    @media (min-width: 968px) {
      margin-top: 100px;
    }

    @media (min-width: 1220px) {
      margin-top: 140px;
    }
  }
}

.whom {
  margin: 35px auto 50px;

  @media (min-width: 560px) {
    margin-bottom: 80px;
  }

  @media (min-width: 968px) {
    margin-bottom: 110px;
  }

  @media (min-width: 1220px) {
    margin-bottom: 150px;
  }

  &-title {
    @include mixins.setFontParams(500, 20px);
    color: colors.$textDark;
    margin-bottom: 62px;

    @media (min-width: 560px) {
      font-size: 25px;
    }

    @media (min-width: 968px) {
      font-size: 30px;
    }

    @media (min-width: 1220px) {
      font-size: 35px;
    }
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &-item {
    flex: 1 0 100%;

    @media (min-width: 560px) {
      flex: 1 0 50%;
    }

    :deep(.paragraph-icon) {
      height: 34px;

      @media (min-width: 560px) {
        height: 40px;
      }

      @media (min-width: 968px) {
        height: 46px;
      }

      @media (min-width: 1220px) {
        height: 52px;
      }
    }

    :deep(.paragraph-text) {
      font-size: 16px;

      @media (min-width: 560px) {
        font-size: 19px;
      }

      @media (min-width: 968px) {
        font-size: 25px;
      }

      @media (min-width: 1220px) {
        font-size: 30px;
      }
    }
  }

  &-img {
    display: block;
    width: 100%;

    @media (min-width: 560px) {
      margin-left: auto;
      width: 50%;
    }
  }
}

.benefist {
  &-wrapper {
    margin-bottom: 50px;

    @media (min-width: 560px) {
      margin-bottom: 70px;
    }

    @media (min-width: 968px) {
      margin-bottom: 110px;
    }

    @media (min-width: 1220px) {
      margin-bottom: 140px;
    }
  }

  &-item {
    padding: 10px 10px 10px 20px;
    font-size: 14px;
    flex-basis: calc(50% - 30px);
    align-items: center;

    @media (min-width: 560px) {
      font-size: 20px;
    }

    @media (min-width: 968px) {
      padding: 20px 15px 20px 25px;
      flex-basis: calc(50% - 40px);
      font-size: 25px;
    }

    @media (min-width: 1220px) {
      padding: 40px 20px 40px 30px;
      flex-basis: calc(50% - 50px);
      font-size: 35px;
    }

    :deep(.item-num) {
      font-size: 70px;

      @media (min-width: 560px) {
        font-size: 80px;
      }

      @media (min-width: 968px) {
        font-size: 110px;
      }

      @media (min-width: 1220px) {
        font-size: 130px;
      }
    }
  }
}

.incorais {
  :deep(.insurance-content) {
    padding: 26px 22px 33px 40px;
    width: calc(100% - 62px);

    @media (min-width: 560px) {
      padding: 38px 50px 47px 55px;
      width: calc(100% - 105px);
    }

    @media (min-width: 920px) {
      padding: 55px 70px 60px 58px;
      flex-basis: calc(50% - 138px);
      width: auto;
    }

    @media (min-width: 1220px) {
      padding: 66px 82px 76px 60px;
      flex-basis: calc(50% - 142px);
    }
  }

  &-image {
    width: 100%;
  }
}

.form-field {
  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
