import React, { Component } from 'react'

const List = (props) => {
    return (
        <div className="container">
            {props.cards.map(el =>
                <div className="movie-card">
                    <img className="movie-header" src={el.Image}></img>
                    <div className="movie-content">
                        <div className="movie-content-header">
                            <h3 className="movie-title">{el.Title}</h3>
                        </div>
                        <div className="movie-info">
                            <div className="info-section">
                                <label>Released</label>
                                <span>{el.Released}</span>
                            </div>
                            <div className="info-section">
                                <label>Runtime</label>
                                <span>{el.Runtime}</span>
                            </div>
                        </div>
                    </div>
                </div>
              )}
              </div>
      
              )
          }
export default List;