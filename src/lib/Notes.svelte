<script lang="ts">
  // a few imports here
  import Fa from "svelte-fa/src/fa.svelte";
  import { faStar } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher } from "svelte";
  import { formatDate } from "@/libs/utils";



//   here comes some props

// export let id : number
export let title: string
export let  content : string
export let date : string
export let isFav : boolean
export let tags : string[]

// declare methods

// trim content if longer than  100 characters  and add ellipses
// @param {String} content


const  contentTrim = (content : string) => {
    if(content.length > 100){
        return `${content.substring(0,100)}....`
    }
    return content
}
</script>

<div class="note-card">
    <div class="title">{title}</div>
    <div class="preview">{contentTrim(content)}</div>

    <div class="tag-wrapper">
        {#each tags as tag (tag)}
        <div class="tag">{tag}</div>
        {/each}
    </div>
    <div class="card-footer">
        <div class="date">{formatDate(date)}</div>

        <div class="fav-icon">
        <Fa icon={faStar} color="{isFav ? '#ffda00' : '#afaeae'}"/>
        </div>
    </div>

</div>
