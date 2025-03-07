const poet ={
    born: 1935,
    name: "Mary Oliver",
}

const someObject: object = {
    name: "Mary Oliver",
    born: 1935,
    occupation: "poet",
}

//console.log(someObject.name); //error --> object 타입이여서 어떤 객체인지는 모름 그래서 에러

// 타입 별칭을 이용하여 객체의 타입 설정 (중요)
type Poet = {
    born: number;
    name: string;
};

// 이후 객체값을 Poet 타입으로 설정 가능
let poetValue: Poet;

poetValue = {
    born: 1935,
    name: "Sara Teasdale",
};

//구조적 타이핑(Structural Typing)에 의한 타입 호환성
type WithFirstName = {
    firstName: string;
};
type WithLastName = {
    lastName: string;
};

// hasBoth가 WithFirstName, WithLastName 둘 중 어떠한 타입도 아닌 객체 리터럴 타입임을 유의
// (단, 두 타입에서 요구하는 값을 모두 가지고 있긴 함)
const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
}; //hasboth는 WithFirstName, WithLastName 둘 중 어떠한 타입도 아닌 객체 리터럴 타입임을 유의


//이건 허용 가능, hasBoth에 firstName 속성이 있고 string 타입이므로(즉, 구조적으로 동일하므로) 대입 가능
// hasBoth에 firstName 속성이 있고 string 타입이므로(즉, 구조적으로 동일하므로) 대입 가능
let withFirstName: WithFirstName = hasBoth;
// hasBoth에 lastName 속성이 있고 string 타입이므로(즉, 구조적으로 동일하므로) 대입 가능
let withLastName: WithLastName = hasBoth;

//이건 안됨
// withFirstName = {firstName: "Lucille", lastName: "Clifton"}; //error --> WithFirstName 타입에는 lastName 속성이 없음

//초과 속성 검사
type User = {
    name: string;
    age: number;
}

// 케이스 1: 초과된 속성이 포함된 객체 리터럴 값의 할당은 불가
// const john: User = {
//     name: "John",
//     age: 30,
//     occupation: "developer" // 에러 발생 => 초과 속성 검사에 걸림
// };

// 케이스 2: 중간 변수를 통한 할당
// (johnObj는 User 타입이 아님을 유의!)
const johnObj = {
    name: "John",
    age: 30,
    occupation: "developer"
};

// 구조적 타이핑의 원칙에 따라 대입을 허용
const john2: User = johnObj;
// (단, john2를 User 타입으로 인식하고 있으므로, User 타입에 포함되지 않는 값에는 접근 불가)
//console.log(john2.occupation);
