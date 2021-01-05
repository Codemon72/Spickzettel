# Ghost Cheatsheet

**Installation**: https://ghost.org/docs/install/local/
**Ghost Forum**: https://forum.ghost.org/
**[Ghost for Beginners Website](https://www.ghostforbeginners.com/)**

## Workflow for new Project

- empty folder
- cd into it and: `ghost install local`
- cd into themes and: `git init`
  version control: "It is usually suggested to have just the theme (not the installation) as your git repository." (Ghost Forum)
- connect and upload to github 
- download desired theme
- copy theme, rename it and start working with it

**ghost stop** to stop Ghost
**ghost start** to start Ghost
**ghost log** views logs
**ghost ls** to list all running Ghost blogs
Run **ghost help** for a list of available commands, or explore the full [Ghost-CLI documentation](https://ghost.org/docs/api/v3/ghost-cli/).

Installation of Handlebars is already done for you in Ghost.

[structure of a ghost theme](https://ghost.org/docs/api/v3/handlebars-themes/structure/)

#### Bare minimum of a Ghost theme:
A folder with `index.hbs`, `post.hbs` and `package.json`. This will bring up loads of warnings if you activate it in your admin view but it will work. Tutorial: https://www.youtube.com/watch?v=NqHw0we2WP4&list=PLtKjv92L0ihBBXGz7iCdtTkvdD0dXXy78&index=7 

##### Ghost helpers
from the docs: https://ghost.org/docs/themes/helpers/

#### Core elements
Ghost (and subsequently Ghost themes) have a few core concepts from which they build their structure. Most of these are standard elements of any blogging engine or platform.

**Posts**: Referred to as “Stories” within user admin, posts are the base unit of Ghost. They’re blog posts… like the one you’re reading… right now.
Pages: Pages are actually a sub-variant of posts. They have all the same properties as posts, but are excluded from the list/index of posts and won’t appear on the homepage.
**Authors**: Authors are discrete objects that are associated posts and pages. The authors in a blog will also have their own pages including their avatar, description, and the post they’ve written.
**Navigation**: Navigation is user customizable via the Ghost admin. You’re able to design a template within your theme for how the navigation manifests on each page.
**Tags**: Tags can be associated with either posts or pages. Like authors, tags get their own page with all the posts that have the relevant tag, as well as an optional image and description. When tagging a post, the first tag in the series considered the “primary tag,” and can be given special features or privileges within the theme.
**Blog Attributes**: The blog themselves can also have various attributes that are customized via the admin. This includes blog title, blog description, logos, and social icons.
**Email Signup**: The enabling of email sign-up within the admin is currently optional and is by default deactivated. However, you can definitely add support for it within your theme. There’re two items associated with email subscription. First is a partial, that can be included anywhere throughout your site, which will generate a standard e-mail signup form. The second is a discrete email subscription page which is also customizable, comes pre-baked with a standard look and feel similar to that of the login page.
You also have the ability to customize the login pages for Ghost, but doing so is typically unneeded for the majority of projects.

#### How to modify a theme

[blog](https://stanislas.blog/2018/02/my-custom-ghost-theme/) and his [code](https://github.com/angristan/Casper-XYZ/blob/master/assets/css/custom.css)