# CD29 RPA Solutions Documentation

This repository contains the documentation for CD29 RPA Solutions, built with [MkDocs](https://www.mkdocs.org/) using the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Live Site

The documentation is published at: [https://romain-kerdigital.github.io/cd29.rpa-solutions.io/](https://romain-kerdigital.github.io/cd29.rpa-solutions.io/)

## Development

### Prerequisites

- Python 3.x
- pip (Python package manager)

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/romain-kerdigital/cd29.rpa-solutions.io.git
   cd cd29.rpa-solutions.io
   ```

2. Install MkDocs and required plugins:
   ```bash
   pip install mkdocs-material
   pip install mkdocs-glightbox
   pip install mkdocs-minify-plugin
   pip install mkdocs-video
   ```

### Local Development

Run the development server:
```bash
mkdocs serve
```

This will start a local server at `http://127.0.0.1:8000/`.

### Building

Build the static site:
```bash
mkdocs build
```

This generates the static site in the `site` directory.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow handles the deployment process.

To manually deploy:
```bash
mkdocs gh-deploy
``` 
2