This is a template for creating a web AR gallery from glb files.

## Getting Started

### Step 1
Click in the top right of this page to make a fork of this repo to your own github account.

[![fork](https://docs.github.com/assets/cb-6294/images/help/repository/fork_button.jpg)](https://github.com/michaelgold/nextjs-ar-gallery/fork)


### Step 2
Import your forked repo to code sandbox so that you can make the necessary edits.

Replace the url `https://githubbox.com/YOUR_GITHUB_USERNAME/nextjs-ar-gallery` with your actual github username and then visit that URL, for example `https://githubbox.com/michaelgold/nextjs-ar-gallery`



### Step 3

Modify data.json

#### Edit the artist secion:


``` json
{
  "artist": {
    "name": "Michael Gold",
    "avatar": "/images/avatar.jpg",
    "shortBio": "Generative Artist",
  },
}

```
Update the values for `name` and `shortBio` with your information
Upload your avatar to the `/public/images/`directory and update the link value for `avatar` to match the filename of the avatar you uploaded.

``` json

    "socials": [
      { "icon": "FaHome", "url": "https://mike.gold" },
      { "icon": "FaTwitter", "url": "https://twitter.com/michaelgold" },
      { "icon": "FaGithub", "url": "https://github.com/michaelgold" },
      { "icon": "FaLinkedin", "url": "https://linkedin.com/in/gold1" },
      { "icon": "FaUniversity", "url": "https://sva.edu/faculty/michael-gold" }
    ]

``` 
Update the values for `url` to match the relevant URLs on with your websites.  Add or remove lines as necessary.
You can look up addional icon names from the Font Awesome library [here](https://react-icons.github.io/react-icons/icons?name=fa)

``` json
{
  "artist": {
    "name": "Michael Gold",
    "avatar": "/images/avatar.jpg",
    "shortBio": "Generative Artist",
  },
}

```
Update the values for `name` and `shortBio` with your information
Upload your avatar to the `/public/images/`directory and update the link value for `avatar` to match the filename of the avatar you uploaded.

#### Edit the project secion:

``` json
  "project": {
    "name": "AR Gallery Example"
  },

```
Update the values for `name` to match your project name.

#### Edit the models secion:

``` json

  "models": [
    {
      "name": "Gold Cube",
      "glbFile": "/assets/gold-cube.glb",
      "attributes": [
        { "trait_type": "shape", "value": "cube" },
        { "trait_type": "size", "value": "small" },
        { "trait_type": "color", "value": "gold" },
        { "trait_type": "material", "value": "metal" }
      ]
    }
  ]

```

Upload your glb file to `/public/assets/` and update the values for `glbFile` with the link to your glb file. 
Optionally, upload a usdz file to to `/public/assets/` and update the values for `usdFile` with the link to your usdz file. (you will only need a usdz file if you use animations)

Edit the `trait_type` field values to reference the parameter names you use to generate your art
Edit the `value` field values to reference the parameter values you use to generate your art



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
