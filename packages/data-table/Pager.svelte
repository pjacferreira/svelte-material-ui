<script>
  import { events } from "@material/data-table/constants";
  import { createEventDispatcher } from "svelte";
  import IconButton from "@smui/icon-button";
  import Select, { Option } from "@smui/select";

  const dispatch = createEventDispatcher();

  // For Pagination
  export let page = 1; // Current Page
  export let pageSize = 10; // Current Page Size
  export let pageSizes = [5, 10, 50]; // DEFAULT: Page Size List
  export let pageAll = false; // Allow Size to Include Everything
  export let itemCount = 0; // Total Number of Items in Data Set

  $: firstItem = calcFirstItem(page, pageSize);
  $: lastItem = calcLastItem(page, pageSize, itemCount);
  $: lastPage = Math.floor(itemCount / pageSize);
  $: sizes = pageAll ? [...pageSizes, 'all'] : pageSizes;

  function calcFirstItem(p, ps) {
    if (ps === "all") {
      return 1;
    }

    return (p - 1) * ps + 1;
  }

  function calcLastItem(p, ps, ic) {
    if (ps === "all") {
      return ic;
    }

    let li = p * ps - 1;
    return li > ic ? ic : li;
  }

  function handleFirstPage(e) {
    dispatch("set-page", 1);
  }

  function handlePreviousPage(e) {
    dispatch("set-page", page - 1);
  }

  function handleNextPage(e) {
    dispatch("set-page", page + 1);
  }

  function handleLastPage(e) {
    dispatch("set-page", Math.floor(itemCount / pageSize));
  }

  function handleChangePageSize(e) {
    const t = e.target;
    const value = t.item(t.selectedIndex).value;
    dispatch("set-page-size", value);
  }

// TODO: Fix style="display: inline-block;" (No need for styles with Version 8.0.0 of material)
</script>

<div class="mdc-data-table__pagination">
  <div class="mdc-data-table__pagination-trailing">
    <div style="display: inline-block;" class="mdc-data-table__pagination-rows-per-page">
      <div style="display: inline-block;" class="mdc-data-table__pagination-rows-per-page-label">
        Rows per page
      </div>

      <Select value={pageSize} on:input={handleChangePageSize}>
        {#each sizes as size}
          <Option value={size} selected={pageSize === size}>
            {size}
          </Option>
        {/each}
      </Select>
    </div>

    <div style="display: inline-block;" class="mdc-data-table__pagination-navigation">
      <div style="display: inline-block;" class="mdc-data-table__pagination-total">
        {firstItem}‑{lastItem}
        of
        {itemCount}
      </div>
      <IconButton
        class="material-icons mdc-data-table__pagination-button"
        data-first-page="true"
        disabled={page === 1}
        on:click={handleFirstPage}>
        first_page
      </IconButton>
      <IconButton
        class="material-icons mdc-data-table__pagination-button"
        data-prev-page="true"
        disabled={page === 1}
        on:click={handlePreviousPage}>
        chevron_left
      </IconButton>
      <IconButton
        class="material-icons mdc-data-table__pagination-button"
        data-next-page="true"
        disabled={page === lastPage}
        on:click={handleNextPage}>
        chevron_right
      </IconButton>
      <IconButton
        class="material-icons mdc-data-table__pagination-button"
        data-last-page="true"
        disabled={page === lastPage}
        on:click={handleLastPage}>
        last_page
      </IconButton>
    </div>
  </div>
</div>
