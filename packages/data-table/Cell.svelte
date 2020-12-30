{#if header}
  <th
    use:useActions={use}
    use:forwardEvents
    class="
  mdc-data-table__header-cell
  {className}
  {checkbox ? 'mdc-data-table__header-cell--checkbox' : ''}
  {sortable ? 'mdc-data-table__header-cell--with-sort' : ''}
  "
    {...roleProp}
    {...scopeProp}
    {...props}>
    {#if sortable}
      <div class="mdc-data-table__header-cell-wrapper">
        <IconButton
          class="material-icons mdc-data-table__sort-icon-button"
          on:click={handleSortChange}>
          {sortIcon}
        </IconButton>
        <div style="display: inline-block;" class="mdc-data-table__header-cell-label">
          <slot />
        </div>
      </div>
    {:else}
      <slot />
    {/if}
  </th>
{:else}
  <td
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-data-table__cell
      {className}
      {numeric ? 'mdc-data-table__cell--numeric' : ''}
      {checkbox ? 'mdc-data-table__cell--checkbox' : ''}
    "
    {...roleProp}
    {...scopeProp}
    {...props}>
    <slot />
  </td>
{/if}

<script>
  import { getContext, setContext, createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "@smui/common/forwardEvents.js";
  import { exclude } from "@smui/common/exclude.js";
  import { useActions } from "@smui/common/useActions.js";
  import IconButton from "@smui/icon-button";
	
  const dispatch = createEventDispatcher();
  const forwardEvents = forwardEventsBuilder(get_current_component());

  let header = getContext("SMUI:data-table:row:header");
  setContext("SMUI:data-table:row:header:cell", header);

  export let use = [];
  let className = "";
  export { className as class };
  export let role = header ? "columnheader" : undefined;
  export let scope = header ? "col" : undefined;
  export let numeric = false;
  export let checkbox = false;
  export let sortable = false;
  export let sortOrder = "none";

  $: sortIcon = sortOrder === "none"
    ? "sort"
    : (sortOrder === "asc" ? "arrow_downward" : "arrow_upward");

  $: props = exclude($$props, ["use", "class", "numeric", "checkbox", "sortable", "sortOrder"]);

  $: roleProp = role ? { role } : {};
  $: scopeProp = scope ? { scope } : {};

  function handleSortChange() {
    switch (sortOrder) {
      case "none":
        sortOrder = "asc";
        break;
      case "asc":
        sortOrder = "desc";
        break;
      default:
        // Invalid or DESC
        sortOrder = "none";
    }

    dispatch('sort', sortOrder);
  }
</script>
