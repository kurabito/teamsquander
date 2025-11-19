<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_DISCS_API_KEY;

// Doug's discs
const dougsHeadings = ref([]);
const dougsDiscs = ref([]);        // all rows (unfiltered, includes URL col)
const dougsVisibleData = ref([]);      // filtered rows (without URL col)
const dougsSpreadsheetId = '1n8pwUgPt8PQGb2quGQs7MBP9sZJTC0v_6ZMJsTvlWLI';
const dougsRange = 'Sheet1!A1:Z';

// Jeff's discs
const jeffsHeadings = ref([]);
const jeffsDiscs = ref([]);        // all rows (unfiltered, includes URL col)
const jeffsVisibleData = ref([]);      // filtered rows (without URL col)
const jeffsSpreadsheetId = '1W4DviEJ1Bp1POmTqU17BmRuntjA745wjJEWoQm5s9qo';
const jeffsRange = 'Available!A1:Z';

const fetchDiscs = async (spreadsheetId, range, apiKey, headings, discs, visibleData, linkColumn) => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
    );
    const values = response.data.values;
    if (values && values.length > 0) {
      // Remove the heading for the link column so it won’t render
      headings.value = values[0].filter((_, index) => index !== linkColumn);
      discs.value = values.slice(1);
      // Remove link column from each row’s data
      visibleData.value = values.slice(1).map(row =>
        row.filter((_, i) => i !== linkColumn)
      );
    }
  } catch (error) {
    console.error("Error fetching discs: ", error);
  }
};

// Make link display column a link pointing to link target column
function formatCell(cell, row, cellIndex, linkDisplayColumn, linkTargetColumn) {
  const linkUrl = row[linkTargetColumn]; // original URL column before filtering
  if (cellIndex === linkDisplayColumn && linkUrl && linkUrl.startsWith('http')) {
    return `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${cell}</a>`;
  }
  return cell;
}

onMounted(() => {
  fetchDiscs(dougsSpreadsheetId, dougsRange, apiKey, dougsHeadings, dougsDiscs, dougsVisibleData, 10);
  fetchDiscs(jeffsSpreadsheetId, jeffsRange, apiKey, jeffsHeadings, jeffsDiscs, jeffsVisibleData, 9);
});
</script>

<template>
  <div>
    <h1>Disc Library</h1>
    <h2>Doug's Discs</h2>
    <div v-if="dougsDiscs.length">
      <table>
        <thead>
          <tr>
            <th v-for="heading in dougsHeadings" :key="heading">{{ heading }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in dougsVisibleData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="formatCell(cell, dougsDiscs[rowIndex], cellIndex, 1, 10)"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>Jeff's Discs</h2>
    <div v-if="jeffsDiscs.length">
      <table>
        <thead>
          <tr>
            <th v-for="heading in jeffsHeadings" :key="heading">{{ heading }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in jeffsVisibleData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="formatCell(cell, jeffsDiscs[rowIndex], cellIndex, 1, 9)"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Loading data...</p>
    </div>
  </div>
</template>

<style scoped>
table {
  /* width: 100%; */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}
/* th:nth-child(9), td:nth-child(9) {
  width: 10%;
} */
</style>