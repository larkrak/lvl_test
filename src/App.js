import { makeStyles } from '@material-ui/core/styles';
import { useCallback, useReducer } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import produce from "immer";



const elements = [
  {id: 'box1', text: 'Box1', color: '#ef476f'}, 
  {id: 'box2', text: 'Box2', color: '#ffd166'},
  {id: 'box3', text: 'Box3', color: '#06d6a0'},
  {id: 'box4', text: 'Box4', color: '#118ab2'},
]

const dragReducer = produce((draft, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "MOVE": {
      draft[action.from] = draft[action.from] || [];
      draft[action.to] = draft[action.to] || [];
      const [removed] = draft[action.from].splice(action.fromIndex, 1);
      draft[action.to].splice(action.toIndex, 0, removed);
    }
  }
});



const App = () => {

  const useStyles = makeStyles((theme) => ({
    h2: {
      height:"50px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
    },
    ul:{
      listStyle:"none",
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-start",
      width:"100%",
      backgroundColor:"#6d6875"
    },
    li:{
      width:"25%",
    },
    newLi:{
      width:"100%",
      position:"relative"
    },
    newDrops:{
      listStyle:"none",
      display:"flex",
      flexDirection:"column",
      width:"100%",
      backgroundColor:"#6d6875"
    },
    dragged:{
      color: "grey",
      opacity: "0.99",
      borderRadius: "5px",
      transition:".3s ease all"
    },
    noDragged:{
      backgroundColor: "grey"
    }
  }));

  const classes = useStyles();

  const [state, dispatch] = useReducer(dragReducer, {items: elements});

  const onDragEnd = useCallback((result) => {
    if (result.reason === "DROP") {
      if (!result.destination) {
        return;
      }    
      console.log(result)  
      dispatch({
        type: "MOVE",
        from: result.source.droppableId,
        to: result.destination.droppableId,
        fromIndex: result.source.index,
        toIndex: result.destination.index,
      });

    }

  }, []);

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items" direction="horizontal" type="BOX">
          {(provided, snapshot) => {
            return (
              <ul className={`${classes.ul}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >

                {state.items?.map(({id, text, color}, index) => {
                  return (
                    <Draggable
                      key={id}
                      draggableId={id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <li
                            className={`${classes.li} `}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h2 className={`${classes.h2} ${snapshot.isDragging ? classes.dragged : ""}`}
                            style={{backgroundColor:color}}>
                              {text}
                            </h2>
                          </li>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>
        
        <h2 className={classes.h2}>Drag down here!</h2>

        <div style={{display:"flex", flexDirection:"row"}}>

        <Droppable droppableId="items2" direction="vertical" type="BOX">
          {(provided, snapshot) => {
            return (
              <ul className={`${classes.newDrops}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {state.items2?.map(({id, text, color}, index) => {
                  return (
                    <ul className={`${classes.newDrops}`}>
                    <Draggable
                      key={id}
                      draggableId={id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <li
                            className={`${classes.newLi}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h2 className={`${classes.h2}  ${snapshot.isDragging ? classes.dragged : ""}`}
                            style={{backgroundColor:color}}>
                                {text}
                            </h2>
                          </li>
                        );
                      }}
                    </Draggable>
                    </ul>
                  );
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>

        <Droppable droppableId="items3" direction="vertical" type="BOX">
          {(provided, snapshot) => {
            return (
              <ul className={`${classes.newDrops}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
                
              >
                {state.items3?.map(({id, text, color}, index) => {
                  return (
                    <ul className={`${classes.newDrops}`}>
                    <Draggable
                      key={id}
                      draggableId={id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <li
                            className={`${classes.newLi}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h2 className={`${classes.h2}  ${snapshot.isDragging ? classes.dragged : ""}`}
                            style={{backgroundColor:color}}>
                                {text}
                            </h2>
                          </li>
                        );
                      }}
                    </Draggable>
                    </ul>

                );
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>


        <Droppable droppableId="items4" direction="vertical" type="BOX">
          {(provided, snapshot) => {
            return (
              <ul className={`${classes.newDrops}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
                
              >
                {state.items4?.map(({id, text, color}, index) => {
                  return (
                    <ul className={`${classes.newDrops}`}>
                    <Draggable
                      key={id}
                      draggableId={id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <li
                            className={`${classes.newLi}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h2 className={`${classes.h2}  ${snapshot.isDragging ? classes.dragged : ""}`}
                            style={{backgroundColor:color}}>
                                {text}
                            </h2>
                          </li>
                        );
                      }}
                    </Draggable>
                    </ul>
                  );
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>

        <Droppable droppableId="items5" direction="vertical" type="BOX">
          {(provided, snapshot) => {
            return (
              <ul className={`${classes.newDrops}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
                
              >
                {state.items5?.map(({id, text, color}, index) => {
                  return (
                    <ul className={`${classes.newDrops}`}>
                    <Draggable
                      key={id}
                      draggableId={id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <li
                            className={`${classes.newLi}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h2 className={`${classes.h2}  ${snapshot.isDragging ? classes.dragged : ""}`}
                            style={{backgroundColor:color}}>
                                {text}
                            </h2>
                          </li>
                        );
                      }}
                    </Draggable>
                    </ul>
                  );
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>



        </div>

        <prueba></prueba>
      </DragDropContext>
    </div>
  );
};
export default App;
//

