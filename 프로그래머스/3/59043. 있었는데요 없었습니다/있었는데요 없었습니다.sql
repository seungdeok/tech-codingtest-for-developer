-- 코드를 입력하세요
-- 관리자의 실수로 일부 동물의 입양일이 잘못 입력되었습니다. 보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회
SELECT A.ANIMAL_ID, A.NAME
FROM ANIMAL_INS A
    LEFT JOIN ANIMAL_OUTS B
    ON A.ANIMAL_ID = B.ANIMAL_ID
WHERE A.DATETIME > B.DATETIME
ORDER BY A.DATETIME