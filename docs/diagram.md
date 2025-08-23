# Stroke order diagram
## Preview
![Diagram preview](assets/images/diagram_demo.gif)

## Description
Add stroke order diagram to picture container. 
This feature is optional, must have add-on is: [Kanji Colorizer (stroke order diagrams)](https://ankiweb.net/shared/info/1964372878)

## Add-on configuration
The 3 most important fields are:
- dst-field: destination field, where your diagrams will be saved
- model: Senren, notetype's name
- src-field: source field, where your word at. 
```
{
    "diagrammed-characters": "auto",
    "dst-field": "diagram",
    "grid": "2x2diag",
    "group-mode": false,
    "image-size": 327,
    "mode": "spectrum",
    "model": "Senren",
    "overwrite-dest": false,
    "saturation": 0.95,
    "src-field": "word",
    "value": 0.75
}
```
