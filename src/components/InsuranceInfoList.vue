<template>
  <ul class="tarifs">
    <li
      v-for="item of list"
      :key="item"
      v-html="item"
      class="tarifs-item"
    />
  </ul>
</template>

<script>
export default {
  name: 'InsuranceInfoList',
  data() {
    return {
      list: [
        'От 2% годовых',
        'Дополнительные<br>комиссии отсутствуют',
        'Конкурентная<br>стоимость гарантии',
        'Минимальный пакет<br>документов',
        'Копии паспортов директора<br>и участников/акционеров<br>(с долей 25% и более)<br>подрядчика (участника конкурса)',
        'Возможность предоставления<br>документов после одобрения<br>условий выдачи гарантии'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@use '@/assets/styles/colors';

.tarifs {
  margin: 0;
  padding: 0;
  list-style-type: square;

  &-item {
    @include mixins.setFontParams(400, 18px);
    color: colors.$textDark;
    line-height: 0.9;

    &:not(:last-child) {
      margin-bottom: 25px;
    }

    @media (min-width: 560px) {
      font-size: 20px;
    }

    @media (min-width: 968px) {
      font-size: 23px;
    }

    @media (min-width: 1220px) {
      font-size: 26px;
    }

    &::marker {
      color: #C5C5C5;
      width: 8px;
      height: 8px;
    }
  }
}
</style>
