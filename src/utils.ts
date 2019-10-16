
// Copyright (C) 2019 ExtraHash
//
// Please see the included LICENSE file for more information.

export function search(
  searchedValue: any,
  arrayToSearch: any[],
  objectPropertyName: string
) {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i][objectPropertyName] === searchedValue) {
      return arrayToSearch[i];
    }
  }
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
