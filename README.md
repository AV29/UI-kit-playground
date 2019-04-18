# UI kit library playground 

## run ``` npm install && npm start```

### Material UI ([see here](https://github.com/AV29/UI-kit-playground/blob/master/src/components/MaterialUI/MaterialUI.jsx)) 

#### These components seem to be the most suitable yet so far. 

Good parts: 
1) First of all they meet requirements of the design almost 100% right out of the box.
2) Components are relatively easy to customize with styles.
3) API seem to be stable across releases.
4) Default styles are embedded from the box.
5) Components can be relatively lightweight.
6) Pretty easy to adjust components's styles with custom class names.

Bad parts
1) Components mostly stateful
2) Did not find an ability to use separate packages for them ("material-ui/button": "x.y.z")
3) Icons may slightly change across version changes.
4) Overall heaviness comparing to doing everything ourselves from scratch.
5) Complex components (e.g. grids) may not be implemented the way we need to. So there's a lot to customize.

*----------------------------------------------------------------------------------------------------------------------*

### Dev Extreme ([see here](https://github.com/AV29/UI-kit-playground/blob/master/src/components/DevExtreme/DevExtreme.jsx))

#### These components seem to be the most suitable yet so far. 

Good parts: 
1) Much larger ecosystem of components.
2) Straightforward APIs (from the first sight).
3) Good support.
4) Very complex and flexible components are out of the box.

Bad parts
1) Huge stateful components.
2) Hard to debug DOM.
3) A lot of JS internal behavior (hover, focus, active states).
4) Heavy! All widgets inherited from DevExtreme base.
5) It is required to install devextreme as well as devextreme-react ( see point 4 ).
5) Vast and pretty confusing API for each component.
6) Necessity to include two 10k+ css files in bundle.  


### Need to proceed investigating with more complex components to find out more caveats about both solutions.