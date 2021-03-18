const  W = 32
const R  = 16
const P = 0
const M1 = 13
const M2 = 9
const M3 = 5

const MAT0POS(t,v) (v^(v>>t))
const MAT0NEG(t,v) (v^(v<<(-(t))))
const MAT3NEG(t,v) (v<<(-(t)))
const MAT4NEG(t,b,v) (v ^ ((v<<(-(t))) & b))

const V0        =    STATE[state_i                   ]
const VM1        =   STATE[(state_i+M1) & 0x0000000fU]
const VM2        =   STATE[(state_i+M2) & 0x0000000fU]
const VM3        =   STATE[(state_i+M3) & 0x0000000fU]
const VRm1       =   STATE[(state_i+15) & 0x0000000fU]
const VRm2       =   STATE[(state_i+14) & 0x0000000fU]
const newV0      =   STATE[(state_i+15) & 0x0000000fU]
const newV1      =   STATE[state_i                 ]
const newVRm1    =   STATE[(state_i+14) & 0x0000000fU]

const FACT = 2.32830643653869628906e-10