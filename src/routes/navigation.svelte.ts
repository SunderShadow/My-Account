import type {Item} from "$lib/components/Navigation/Navigation.svelte"
import {page_home, page_projects, page_about_me, page_contact_me} from "$lib/paraglide/messages/_index"

export default [
  {
    title: page_home(),
    href: '/'
  },
  {
    title: page_projects(),
    href: '#projects'
  },
  {
    title: page_about_me(),
    href: '#about-me'
  },
  {
    title: page_contact_me(),
    href: '#contact-me'
  }
] satisfies Item[]
