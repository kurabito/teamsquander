<template>
  <div>
    <h1>Disc Library</h1>
    <div v-if="sheetData.length">
      <table>
        <thead>
          <tr>
            <th v-for="heading in headings" :key="heading">{{ heading }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in sheetData" :key="index">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Loading data...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const sheetData = ref([]);
const headings = ref([]);
const spreadsheetId = '1W4DviEJ1Bp1POmTqU17BmRuntjA745wjJEWoQm5s9qo';
const apiKey = 'AIzaSyBaa-v2CTdli4nGA8yVzl_yTwZ4L6z5_m4';
const range = 'Available!A1:Z';

const fetchSheetData = async () => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
    );
    const values = response.data.values;
    if (values && values.length > 0) {
      headings.value = values[0]; // Assuming the first row contains headers
      sheetData.value = values.slice(1); // Remaining rows are data
    }
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
  }
};

onMounted(() => {
  fetchSheetData();
});
</script>

