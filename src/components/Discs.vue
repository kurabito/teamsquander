<template>
  <div>
    <h1>Disc Library</h1>
    <h2>Jeff's Discs</h2>
    <div v-if="jeffsDiscs.length">
      <table>
        <!-- <thead>
          <tr>
            <th v-for="heading in headings" :key="heading">{{ heading }}</th>
          </tr>
        </thead> -->
        <tbody>
          <tr v-for="(row, rowIndex) in jeffsVisibleData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="formatCell(cell, jeffsDiscs[rowIndex], cellIndex)"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>Doug's Discs</h2>
    <div v-if="dougsDiscs.length">
      <table>
        <!-- <thead>
          <tr>
            <th v-for="heading in headings" :key="heading">{{ heading }}</th>
          </tr>
        </thead> -->
        <tbody>
          <tr v-for="(row, rowIndex) in dougsVisibleData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="formatCell(cell, dougsDiscs[rowIndex], cellIndex)"></td>
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

// Jeff's discs
const jeffsDiscs = ref([]);        // all rows (unfiltered, includes URL col)
const jeffsVisibleData = ref([]);      // filtered rows (without URL col)
const headings = ref([]);
const jeffsSpreadsheetId = '1W4DviEJ1Bp1POmTqU17BmRuntjA745wjJEWoQm5s9qo';
const jeffsApiKey = import.meta.env.VITE_APP_DISCS_API_KEY;
const jeffsRange = 'Available!A1:Z';

const fetchJeffsDiscs = async () => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${jeffsSpreadsheetId}/values/${jeffsRange}?key=${jeffsApiKey}`
    );
    const values = response.data.values;
    if (values && values.length > 0) {
      // Remove the heading for column 10 so it won’t render
      headings.value = values[0].filter((_, index) => index !== 9);
      // sheetData.value = values.slice(1);
      jeffsDiscs.value = values.slice();
      // Remove column 9 from each row’s data
      jeffsVisibleData.value = values.slice().map(row =>
        row.filter((_, i) => i !== 9)
      );
    }
  } catch (error) {
    console.error("Error fetching Jeff's data:", error);
  }
};

// Doug's discs
const dougsDiscs = ref([]);        // all rows (unfiltered, includes URL col)
const dougsVisibleData = ref([]);      // filtered rows (without URL col)
// const headings = ref([]);
const dougsSpreadsheetId = '1n8pwUgPt8PQGb2quGQs7MBP9sZJTC0v_6ZMJsTvlWLI';
const dougsApiKey = import.meta.env.VITE_APP_DISCS_API_KEY;
const dougsRange = 'Sheet1!A1:Z';

const fetchDougsDiscs = async () => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${dougsSpreadsheetId}/values/${dougsRange}?key=${jeffsApiKey}`
    );
    const values = response.data.values;
    if (values && values.length > 0) {
      // Remove the heading for column 10 so it won’t render
      headings.value = values[0].filter((_, index) => index !== 9);
      // sheetData.value = values.slice(1);
      dougsDiscs.value = values.slice();
      // Remove column 9 from each row’s data
      dougsVisibleData.value = values.slice().map(row =>
        row.filter((_, i) => i !== 9)
      );
    }
  } catch (error) {
    console.error("Error fetching Doug's data:", error);
  }
};


onMounted(() => {
  fetchJeffsDiscs();
  fetchDougsDiscs();
});

// Make column 2 (index 1) a link using the original column 10 (index 9)
function formatCell(cell, row, cellIndex) {
  const linkUrl = row[9]; // original URL column before filtering
  if (cellIndex === 1 && linkUrl && linkUrl.startsWith('http')) {
    return `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${cell}</a>`;
  }
  return cell;
}
</script>

<style>
table {
  /* width: 100%; */
  margin-left: auto;
  margin-right: auto;
}
/* th:nth-child(9), td:nth-child(9) {
  width: 10%;
} */
</style>