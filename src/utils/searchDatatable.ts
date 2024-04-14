/* eslint-disable @typescript-eslint/no-explicit-any */
export default class SearchDatatable {
  static async Search(array: any[], value: any) {
    const newArray: any[] = []
    if (array) {
      const object = array[0]
      if (object || object != null) {
        await array.forEach(function (element) {
          const values = Object.values(element)
          let exist = false
          values.forEach(function (element2: any) {
            if (element2 !== null && element2) {
              element2 = element2.toString()
              if (element2?.toLowerCase().includes(value?.toLowerCase())) {
                exist = true
                return
              }
            }
          })
          if (exist) newArray.push(element)
        })
      }
      return newArray
    } else {
      return array
    }
  }
}
