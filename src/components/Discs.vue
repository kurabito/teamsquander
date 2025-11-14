<template>
  <div>
    <h1>Disc Library</h1>
    <div v-if="sheetData.length">
      <table>
        <!-- <thead>
          <tr>
            <th v-for="heading in headings" :key="heading">{{ heading }}</th>
          </tr>
        </thead> -->
        <tbody>
          <tr v-for="(row, rowIndex) in visibleData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="formatCell(cell, sheetData[rowIndex], cellIndex)"></td>
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

const sheetData = ref([]);        // all rows (unfiltered, includes URL col)
const visibleData = ref([]);      // filtered rows (without URL col)
const headings = ref([]);
const spreadsheetId = '1W4DviEJ1Bp1POmTqU17BmRuntjA745wjJEWoQm5s9qo';
const apiKey = import.meta.env.VITE_APP_DISCS_API_KEY;
const range = 'Available!A1:Z';

const fetchSheetData = async () => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
    );
    const values = response.data.values;
    if (values && values.length > 0) {
      // Remove the heading for column 10 so it won’t render
      headings.value = values[0].filter((_, index) => index !== 9);
      // sheetData.value = values.slice(1);
      sheetData.value = values.slice();
      // Remove column 9 from each row’s data
      visibleData.value = values.slice().map(row =>
        row.filter((_, i) => i !== 9)
      );
    }
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
  }
};

onMounted(() => {
  fetchSheetData();
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