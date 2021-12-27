import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import Square from '../Square';

export default function Board(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#26a69a',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          backgroundColor: '#00766c',
        }}>
        <Square
          style={{
            flex: 0.33,
            marginRight: 2,
            marginBottom: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(0)}
          value={props.squares[0]}
        />
        <Square
          style={{
            flex: 0.33,
            marginRight: 2,
            marginLeft: 2,
            marginBottom: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(1)}
          value={props.squares[1]}
        />
        <Square
          style={{
            flex: 0.33,
            marginLeft: 2,
            marginBottom: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(2)}
          value={props.squares[2]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          backgroundColor: '#00766c',
        }}>
        <Square
          style={{
            flex: 0.33,
            marginRight: 2,
            marginTop: 2,
            marginBottom: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(3)}
          value={props.squares[3]}
        />
        <Square
          style={{
            flex: 0.33,
            marginLeft: 2,
            marginRight: 2,
            marginTop: 2,
            marginBottom: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(4)}
          value={props.squares[4]}
        />
        <Square
          style={{
            flex: 0.33,
            marginLeft: 2,
            marginTop: 2,
            marginBottom: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(5)}
          value={props.squares[5]}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          backgroundColor: '#00766c',
        }}>
        <Square
          style={{
            flex: 0.33,
            marginRight: 2,
            marginTop: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(6)}
          value={props.squares[6]}
        />
        <Square
          style={{
            flex: 0.33,
            marginLeft: 2,
            marginRight: 2,
            marginTop: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(7)}
          value={props.squares[7]}
        />
        <Square
          style={{
            flex: 0.33,
            marginLeft: 2,
            marginTop: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#26a69a',
          }}
          handleClick={() => props.handleClick(8)}
          value={props.squares[8]}
        />
      </View>
      <Text style={{paddingTop: 50}}>{props.status}</Text>
      <View>
        {props.winner ? (
          <Button title={'Restart Game'} onPress={() => props.jumpTo()}/>
        ) : null}
      </View>
    </View>
  );
}
