// type 키워드와 유니언 타입을 사용하여 RawData 타입 별칭을 설정
type RawData = boolean | number | string | null | undefined;

// 이후 별칭을 이용하여 타입 설정 가능
let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;