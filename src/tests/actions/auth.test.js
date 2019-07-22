import {
   login, logout
  } from '../../actions/auth';
import { exportAllDeclaration } from '@babel/types';
  

  test('should generate login action object', () => {
    const uid = 'adb123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
  });

  test('should generate logout action object', () => {

    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });

});

  