<script>
export default {
  data() {
    return {
      members: {
        first: '',
        second: '',
        third: '',
      },
      result: [],
    };
  },
  methods: {
    async callApi() {
      const memberArray = Object.values(this.members).filter((name) => name);
      const res = await fetch('/api/shuffle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ members: memberArray }),
      });
      if (res.ok) {
        const data = await res.json();
        this.result = data.members;
      }
    },
  },
};
</script>

<template>
    <div>
      <label for="first">1人目:</label>
      <input type="text" v-model="members.first" id="first" name="first" placeholder="1人目の名前を入力" />
      <br />
  
      <label for="second">2人目:</label>
      <input type="text" v-model="members.second" id="second" name="second" placeholder="2人目の名前を入力" />
      <br />
  
      <label for="third">3人目:</label>
      <input type="text" v-model="members.third" id="third" name="third" placeholder="3人目の名前を入力" />
      <br />
  
      <button @click="callApi">シャッフル</button>
      <br />
  
      <label for="result">結果</label>
      <br />
  
      <output id="result">{{ result.join("→") }}</output>
    </div>
</template>