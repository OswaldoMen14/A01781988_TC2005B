using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;


/// <summary>
/// Keep track of points score 
/// </summary>
public class Score : MonoBehaviour
{
    [SerializeField] TMP_Text scoreText;
    [SerializeField] GameObject particles;
    int points;
    // Start is called before the first frame update
    void Start()
    {
        points = 0;
        scoreText.text = "Score: 0";
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnTriggerEnter2D(Collider2D col) {
        points += 1;
        scoreText.text = "Score: " + points;
        Instantiate(particles, transform.position ,Quaternion.identity);
        Destroy(col.gameObject); //destroys the item and adds it to the score
    }
}
