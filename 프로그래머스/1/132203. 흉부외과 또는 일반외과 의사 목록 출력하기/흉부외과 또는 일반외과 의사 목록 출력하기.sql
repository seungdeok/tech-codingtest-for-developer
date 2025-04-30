# 진료과(MCDP_CD)가 CS OR GS
# 의사의 이름, 의사 ID, 진료과, 고용일자 조회
# 고용일자 기준으로 내림차순, 같다면 이름을 기준으로 오름차순

SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD IN ('CS', 'GS')
ORDER BY HIRE_YMD DESC, DR_NAME ASC