# CAR_TYPE = SUV
# 평균, 소수 첫 번째 자리 반올림
SELECT ROUND(AVG(DAILY_FEE), 0) AS AVERAGE_FEE
FROM CAR_RENTAL_COMPANY_CAR
WHERE CAR_TYPE = 'SUV'